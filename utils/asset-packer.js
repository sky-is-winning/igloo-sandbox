const fs = require('fs');
const path = require('path');
const zlib = require('zlib');


function processAssetPack(packUrl, outputUrl) {
    fs.readFile(path.join(baseDir, packUrl), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        try {
            const assetPack = JSON.parse(data);
            const assets = getAssetsFromPack(assetPack);
            saveAssets(outputUrl, assets);
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
        }
    });
}

function getAssetsFromPack(assetPack) {
    const assets = [];
    for (const key in assetPack) {
        if (key.startsWith('section')) {
            const files = assetPack[key].files;
            for (const f in files) {
                if (typeof files[f].url !== 'string') { files[f].url = files[f].url[0]; }
                const file = files[f].url;
                const fpath = path.join(baseDir, file);
                if (!fs.existsSync(fpath)) {
                    console.warn(`File not found: ${file}`);
                    continue;
                }

                const data = fs.readFileSync(fpath);

                assets.push({
                    ...files[f],
                    data
                });

                if (files[f].type == "multiatlas") {
                    const multiAtlas = JSON.parse(data);
                    for (const texture of multiAtlas.textures) {
                        const atlas = texture.image;
                        if (!fs.existsSync(path.join(baseDir, files[f].path, atlas))) {
                            console.warn(`Atlas image not found: ${files[f].path + atlas}`);
                            continue;
                        }

                        assets.push({
                            key: atlas,
                            type: "atlasimg",
                            url: files[f].path + atlas,
                            data: fs.readFileSync(path.join(baseDir, files[f].path, atlas))
                        });
                    }
                }
            }
        }
    }
    return assets;
}

function saveAssets(outputUrl, assets) {
    const serializableAssets = assets.map(asset => {
        const { data, ...rest } = asset;
        return {
            ...rest,
            data: Buffer.from(data).toString('base64')
        };
    });

    const pack = JSON.stringify(serializableAssets);
    const compressed = zlib.gzipSync(pack); // or zlib.deflateRawSync(pack)
    fs.writeFile(path.join(baseDir, outputUrl), compressed, err => {
        if (err) console.error('Error writing file:', err);
        else console.log('Compressed pack saved:', outputUrl);
    });
}


var inputFile = process.argv[2];
var outputFile = process.argv[3];
var baseDir = process.argv[4] || process.cwd();

processAssetPack(inputFile, outputFile);
