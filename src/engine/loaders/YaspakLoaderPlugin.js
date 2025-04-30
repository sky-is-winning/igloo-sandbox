function decodeBase64ToUint8Array(base64) {
    const binary = atob(base64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}

function inferMimeType(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    const mimeMap = {
        // Images
        png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg',
        webp: 'image/webp', gif: 'image/gif', avif: 'image/avif',
        bmp: 'image/bmp', svg: 'image/svg+xml',

        // Audio
        mp3: 'audio/mp3', ogg: 'audio/ogg', wav: 'audio/wav',
        flac: 'audio/flac', aac: 'audio/aac', m4a: 'audio/m4a',

        // Video
        mp4: 'video/mp4', webm: 'video/webm', mkv: 'video/x-matroska'
    };
    return mimeMap[ext] || 'application/octet-stream';
}

function decodeToText(bytes) {
    return new TextDecoder().decode(bytes);
}

function decodeToJson(bytes) {
    return JSON.parse(decodeToText(bytes));
}

function decodeToXml(bytes) {
    const xmlText = decodeToText(bytes);
    return new DOMParser().parseFromString(xmlText, 'application/xml');
}

async function createBlobUrl(bytes, type) {
    const blob = new Blob([bytes], { type });
    return URL.createObjectURL(blob);
}

async function createBitmap(bytes, type) {
    const blob = new Blob([bytes], { type });
    return await createImageBitmap(blob);
}

export default class YaspakLoaderPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);
        window.YaspakLoaderPlugin = this;
        pluginManager.registerFileType('yaspak', this.loadYaspak);
        if (process.env.NODE_ENV === 'production') {
            pluginManager.registerFileType('pack', this.loadYaspak);
        }
    }

    async loadYaspak(key, url, loaderPlugin = this.systems.load) {
        url = url.replace('-pack.json', '.yaspak').replace('.json', '.yaspak');
        const load = loaderPlugin;

        if (load.scene.sys.cache.text.has(key)) return;

        const file = new Phaser.Loader.File(load, {
            type: 'yaspak',
            key: key + '-stub',
            url: '',
            load: () => {}
        });

        file.load = async function () {
            const response = await fetch(url);
            const stream = response.body.pipeThrough(new DecompressionStream('gzip'));
            const text = await new Response(stream).text();
            const packData = JSON.parse(text);

            const textures = load.scene.sys.textures;
            const cache = load.scene.sys.cache;

            for (const asset of packData) {
                const { type, key, data, mime, url: assetUrl } = asset;
                const bytes = typeof data === 'string' ? decodeBase64ToUint8Array(data) : data;

                try {
                    switch (type) {
                        case 'image': {
                            const mimeType = mime || inferMimeType(assetUrl);
                            const imageBitmap = await createBitmap(bytes, mimeType);
                            textures.addImage(key, imageBitmap);
                            break;
                        }
                        case 'json':
                            cache.json.add(key, decodeToJson(bytes));
                            break;
                        case 'text':
                            cache.text.add(key, decodeToText(bytes));
                            break;
                        case 'xml':
                            cache.xml.add(key, decodeToXml(bytes));
                            break;
                        case 'csv':
                            cache.csv.add(key, decodeToText(bytes));
                            break;
                        case 'binary':
                            cache.binary.add(key, bytes.buffer);
                            break;
                        case 'html':
                            cache.html.add(key, decodeToText(bytes));
                            break;
                        case 'script': {
                            const script = document.createElement('script');
                            script.text = decodeToText(bytes);
                            document.head.appendChild(script);
                            break;
                        }
                        case 'shader':
                            cache.shader.add(key, decodeToText(bytes));
                            break;
                        case 'audio': {
                            const mimeType = mime || inferMimeType(assetUrl);
                            const audioUrl = await createBlobUrl(bytes, mimeType);
                            load.scene.load.audio(key, audioUrl);
                            break;
                        }
                        case 'video': {
                            const mimeType = mime || inferMimeType(assetUrl);
                            const videoUrl = await createBlobUrl(bytes, mimeType);
                            load.scene.load.video(key, videoUrl);
                            break;
                        }
                        case 'bitmapFont': {
                            const fontData = decodeToJson(bytes);
                            const imageAsset = packData.find(a => a.key === fontData.image);
                            if (imageAsset) {
                                const imageBytes = decodeBase64ToUint8Array(imageAsset.data);
                                const bitmap = await createBitmap(imageBytes, 'image/png');
                                textures.addImage(fontData.image, bitmap);
                                cache.bitmapFont.add(key, fontData.data, bitmap);
                            }
                            break;
                        }
                        case 'tilemapTiledJSON':
                            cache.tilemap.add(key, {
                                format: Phaser.Tilemaps.Formats.TILED_JSON,
                                data: decodeToJson(bytes)
                            });
                            break;
                        case 'tilemapCSV':
                            cache.tilemap.add(key, {
                                format: Phaser.Tilemaps.Formats.CSV,
                                data: decodeToText(bytes)
                            });
                            break;
                        case 'atlas': {
                            const atlasJson = decodeToJson(bytes);
                            const imageAsset = packData.find(a => a.key === atlasJson.meta.image);
                            if (imageAsset) {
                                const imageMimeType = imageAsset.mime || inferMimeType(imageAsset.url);
                                const imageBytes = decodeBase64ToUint8Array(imageAsset.data);
                                const imageBitmap = await createBitmap(imageBytes, imageMimeType);
                                textures.addAtlas(key, imageBitmap, atlasJson);
                            }
                            break;
                        }
                        case 'multiatlas': {
                            const atlasJson = decodeToJson(bytes);
                            const images = [];
                            const dataEntries = [];

                            for (const texture of atlasJson.textures) {
                                const imageAsset = packData.find(
                                    a => a.key === texture.image || a.filename === texture.image
                                );
                                if (!imageAsset) continue;

                                const imageMimeType = imageAsset.mime || inferMimeType(imageAsset.url);
                                const imageBytes = decodeBase64ToUint8Array(imageAsset.data);
                                const imageBitmap = await createBitmap(imageBytes, imageMimeType);

                                images.push(imageBitmap);
                                dataEntries.push(texture);
                            }

                            if (images.length > 0) {
                                textures.addAtlasJSONArray(key, images, dataEntries);
                            }
                            break;
                        }
                        case 'animation': {
                            const animationData = decodeToJson(bytes);
                            const anims = animationData.anims;

                            // Ensure anims exist
                            if (anims && anims.length > 0) {
                                // Iterate over each animation and add it to Phaser
                                anims.forEach(anim => {
                                    const { key, type, frames, frameRate, skipMissedFrames } = anim;

                                    // Prepare the frames for the animation
                                    const animFrames = frames.map(frame => {
                                        return {
                                            key: frame.key,
                                            frame: frame.frame,
                                            duration: frame.duration,
                                            keyframe: frame.keyframe
                                        };
                                    });

                                    // Create the animation in Phaser
                                    load.scene.anims.create({
                                        key: key,
                                        frames: animFrames,
                                        frameRate: frameRate || 24,
                                        skipMissedFrames: skipMissedFrames || true,
                                        repeat: -1 // Loop the animation indefinitely (or change as needed)
                                    });
                                });
                            }
                            break;
                        }
                    }
                } catch (e) {
                    console.warn(`Failed to load asset '${key}' of type '${type}':`, e);
                }
            }

            this.state = Phaser.Loader.FILE_POPULATED;
            this.loader.nextFile(this, true);
        };

        load.addFile(file);
    }
}
