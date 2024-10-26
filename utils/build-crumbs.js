// Merges all crumb files into one

const fs = require('fs')
const path = require('path')
const langs = ['en', 'pt', 'es']

for (let lang of langs) {
    let assets = path.resolve(__dirname, `../assets/media/crumbs/${lang}`)

    let crumbs = {}

    for (let file of fs.readdirSync(assets)) {
        if (file.endsWith('.json')) {
            crumbs[file.replace('.json', '')] = require(`${assets}/${file}`)
        }
    }

    try {
        fs.writeFileSync(`${assets}/../${lang}.json`, JSON.stringify(crumbs))
        console.log('Done')
    } catch (error) {
        console.log(error)
    }
}
