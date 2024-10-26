const jsonData = JSON.stringify({
    section1: {
        files: [
            {
                type: 'multiatlas',
                url: 'assets/media/igloos/buildings/sprites/IGLOONAME/IGLOONAME.json',
                path: 'assets/media/igloos/buildings/sprites/IGLOONAME',
                key: 'IGLOONAME'
            },
            {
                url: 'assets/media/igloos/buildings/sprites/IGLOONAME/IGLOONAME-physics.json',
                type: 'json',
                key: 'IGLOONAME-physics'
            }
        ]
    },
    meta: {
        app: 'Phaser Editor 2D - Asset Pack Editor',
        contentType: 'phasereditor2d.pack.core.AssetContentType',
        url: 'https://phasereditor2d.com',
        version: 2,
        showAllFilesInBlocks: false
    }
})

const fs = require('fs')

const path = './assets/media/igloos/buildings/sprites/'
const folders = fs.readdirSync(path)
for (let folder of folders) {
    const file = `${path}${folder}/${folder}-pack.json`
    if (fs.existsSync(file)) {
        continue
    }
    const data = jsonData.replaceAll(/IGLOONAME/g, folder)
    fs.writeFileSync(file, data)
}
