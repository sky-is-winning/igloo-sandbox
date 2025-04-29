const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const { spawn } = require('child_process');

const srcDir = './assets';
const distDir = './dist';
const distAssetsDir = path.join(distDir, 'assets');

// Step 1: Copy /assets/ to /dist/assets/
async function copyAssets() {
    await fsp.rename(`${distAssetsDir}/scripts/client`, `${distAssetsDir}/../scripts`);
    await fsp.rm(distAssetsDir, { recursive: true, force: true });
    await fsp.cp(srcDir, distAssetsDir, { recursive: true });
    await fsp.rm(`${distAssetsDir}/scripts/client`, { recursive: true, force: true });
    await fsp.rename(`${distAssetsDir}/../scripts`, `${distAssetsDir}/scripts/client`);
    console.log('Assets copied to dist/assets/');
}

async function getAllJsonRecursive(dir) {
    const files = await fsp.readdir(dir, { withFileTypes: true });
    const jsonFiles = [];

    for (const file of files) {
        const res = path.resolve(dir, file.name);
        if (file.isDirectory()) {
            jsonFiles.push(...await getAllJsonRecursive(res));
        } else if (file.name.endsWith('.json')) {
            jsonFiles.push(res);
        }
    }

    return jsonFiles;
}

async function processAllPacks() {
    // Search for all asset packs in assets directory
    
    const packs = await getAllJsonRecursive(distAssetsDir)
    for (let pack of packs) {
        pack = path.relative(distDir, pack);
        const buildPackPath = pack
        const outputPath = `dist/${pack.replace('-pack.json', '.yaspak').replace('.json', '.yaspak')}`;

        if (!fs.existsSync(buildPackPath)) {
            continue;
        }

        await new Promise((resolve, reject) => {
            fs.readFile(buildPackPath, 'utf8', async (err, data) => {
                if (err) return reject(err);

                try {
                    const assetPack = JSON.parse(data);
                    if (!assetPack || !assetPack.meta || !assetPack.meta.contentType || assetPack.meta.contentType !== 'phasereditor2d.pack.core.AssetContentType') {
                        return resolve();
                    }

                    const assets = getAssetsFromPack(assetPack);

                    // Delete all files referenced in pack
                    for (const asset of assets) {
                        const assetPath = path.resolve(distDir, asset.url);
                        try {
                            await fsp.unlink(assetPath);
                        } catch (e) {
                            console.warn(`Could not delete ${asset.url}: ${e.message}`);
                        }
                    }

                    // Delete the pack itself
                    await fsp.unlink(`dist/${buildPackPath}`);

                    // Run packer
                    const absPackerPath = path.resolve('./utils/asset-packer.js');
                    const packer = spawn('node', [absPackerPath, pack, outputPath, path.resolve('.')], { cwd: process.cwd(), stdio: 'inherit' });
                    packer.on('error', (err) => {
                        console.error(`Error spawning packer: ${err.message}`);
                        reject(err);
                    });
                    packer.on('exit', (code) => {
                        if (code !== 0) {
                            console.error(`packer exited with code ${code}`);
                            return reject(new Error(`packer failed with code ${code}`));
                        }
                    });

                    resolve();
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
}

function getAssetsFromPack(assetPack) {
    const assets = [];

    for (const key in assetPack) {
        if (key.startsWith('section')) {
            const files = assetPack[key].files;
            for (const f in files) {
                if (typeof files[f].url !== 'string') { files[f].url = files[f].url[0]; }
                const fileUrl = path.join(distDir, files[f].url);
                const data = fs.readFileSync(fileUrl);

                assets.push({
                    ...files[f],
                    url: files[f].url,
                    data
                });

                if (files[f].type === 'multiatlas') {
                    const multiAtlas = JSON.parse(data);
                    for (const texture of multiAtlas.textures) {
                        const atlas = texture.image;
                        const atlasUrl = path.join(files[f].path, atlas);
                        const atlasData = fs.readFileSync(path.join(distDir, atlasUrl));
                        assets.push({
                            key: atlas,
                            type: 'atlasimg',
                            url: atlasUrl,
                            data: atlasData
                        });
                    }
                }
            }
        }
    }

    return assets;
}

// Run it all
(async () => {
    try {
        await copyAssets();
        await processAllPacks();
    } catch (err) {
        console.error('Error:', err);
    }
})();
