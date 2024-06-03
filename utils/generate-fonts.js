const fontJS = './src/data/fonts.js'
const fontFolder = './client/fonts/'
const fs = require('fs')

let fontString = 'const fonts = [\n'
for (let file of fs.readdirSync(fontFolder)) {
    if (!file.endsWith('.woff2')) continue
    let font = file.split('.')[0]
    let weight = 'normal'
    let style = 'normal'
    if (font.includes('Italic')) {
        style = 'italic'
        font = font.replace('Italic', '')
    }
    if (font.includes('Bold')) {
        weight = 'bold'
        font = font.replace('Bold', '')
    }
    if (font.includes('Regular')) {
        font = font.replace('Regular', '')
    }
    font = font.replaceAll('-', '')
    let weightString = weight == 'normal' ? '' : `, weight: '${weight}'`
    let styleString = style == 'normal' ? '' : `, style: '${style}'`
    fontString += `    {name: '${font}'${weightString}${styleString}, url: '/client/fonts/${file}'},\n`
}

fontString += ']\n\nexport default fonts'

fs.writeFileSync(fontJS, fontString)
