const fs = require('fs');
const path = require('path');

const inputDir = './src/scenes/igloos';     // adjust this to where your scene files are
const outputDir = './preview-jsons'; // adjust this if you want output elsewhere

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

function extractPreviewData(fileContent, filename) {
    const assetPackMatch = fileContent.match(/this\.load\.pack\(\s*['"`](.+?)['"`]\s*,\s*['"`](.+?)['"`]\s*\)/);
    if (!assetPackMatch) return null;

    const [_, packKey, packPath] = assetPackMatch;

    const lines = fileContent.split('\n');
    const objects = [];

    let lastAddedObject = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        const addMatch = line.match(/this\.add\.(image|sprite)\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*['"`](.+?)['"`]\s*,\s*['"`](.+?)['"`]\s*\)/);
        if (addMatch) {
            const [_, type, x, y, key, frame] = addMatch;
            lastAddedObject = {
                type,
                key,
                frame,
                x: Number(x),
                y: Number(y),
                originX: 0.5,
                originY: 0.5
            };
            objects.push(lastAddedObject);
            continue;
        }

        const originMatch = line.match(/\.setOrigin\(\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/);
        if (originMatch && lastAddedObject) {
            lastAddedObject.originX = Number(originMatch[1]);
            lastAddedObject.originY = Number(originMatch[2]);
        }
    }

    const sceneName = path.basename(filename).replace(/\.(js|ts)$/, '');
    return {
        name: sceneName,
        assets: {
            pack: packPath,
            key: packKey
        },
        objects
    };
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            walk(full);
        } else if (file.endsWith('.js') || file.endsWith('.ts')) {
            const content = fs.readFileSync(full, 'utf-8');
            const data = extractPreviewData(content, file);
            if (data && data.objects.length > 0) {
                const outFile = path.join(outputDir, `${data.name}-preview.json`);
                fs.writeFileSync(outFile, JSON.stringify(data, null, 2));
                console.log(`✅ Created ${outFile}`);
            } else {
                console.warn(`⚠️  No objects found in ${file}`);
            }
        }
    }
}

walk(inputDir);