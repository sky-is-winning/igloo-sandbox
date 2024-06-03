const path = require('path')
const fs = require('fs')

const newPackage = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
const currentPackage = JSON.parse(fs.readFileSync(path.join(__dirname, '../currentversion/package.json')))

console.log(`Current game version is ${currentPackage.version} - PR version is ${newPackage.version}`)

if (currentPackage.version == newPackage.version) {
    throw 'Version number must be updated before pushing to production'
    process.exit(1)
}
