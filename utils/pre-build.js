const fs = require('fs')
const path = require('path')
const pjson = require('../package.json')

let file = path.join(__dirname, '../assets/current.version')

let enCrumbs = path.join(__dirname, '../assets/media/crumbs/en')
let ptCrumbs = path.join(__dirname, '../assets/media/crumbs/pt')
let esCrumbs = path.join(__dirname, '../assets/media/crumbs/es')

try {
    fs.writeFileSync(file, pjson.version)
    console.log(`Version ${pjson.version} written to static file`)

    fs.rmSync(enCrumbs, {recursive: true, force: true})
    fs.rmSync(ptCrumbs, {recursive: true, force: true})
    fs.rmSync(esCrumbs, {recursive: true, force: true})
    console.log('Crumbs source files removed')
} catch (e) {
    console.error(e)
}
