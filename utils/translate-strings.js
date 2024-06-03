// Merges all crumb files into one

const fs = require('fs')
const {Translate} = require('@google-cloud/translate').v2
const projectId = 'clubpenguinplus'
const tlate = new Translate({projectId})
const translate = async (input, lang) => {
    console.log(`Translating "${input}" to "${lang.to}"`)
    var translated = await tlate.translate(input, lang.to)
    return translated[0]
}
const path = require('path')
const langs = ['pt', 'es']

for (const lang of langs) {
    tranlateLang(lang)
}

async function tranlateLang(lang) {
    let newJson = {errors: {}}
    const assets = path.resolve(__dirname, `../client/media/crumbs/${lang}`)
    const stringFile = fs.readFileSync(`${assets}/strings.json`)
    let strings = JSON.parse(stringFile)
    for (let identifier in strings) {
        if (identifier == 'errors') {
            for (let error in strings[identifier]) {
                const errrror = error
                const arr = processString(strings[identifier], errrror)
                for (let i = 0; i < arr.length; i++) {
                    const localI = i
                    if (typeof arr[localI] == 'string') {
                        let p = await translate(arr[localI], {to: lang})
                        arr[localI] = p
                    } else {
                        for (let j = 0; j < arr[localI].length; j++) {
                            const localJ = j
                            if (localJ % 2 != 0) continue
                            var p = await translate(arr[localI][localJ], {to: lang})
                            arr[localI][localJ] = p
                        }
                        arr[localI] = arr[localI].join('')
                    }
                }
                newJson.errors[errrror] = arr.join('\n')
            }
            continue
        }
        const arr = processString(strings, identifier)

        const promises = []
        for (let i = 0; i < arr.length; i++) {
            const localI = i
            if (typeof arr[localI] == 'string') {
                let p = await translate(arr[localI], {to: lang})
                arr[localI] = p
            } else {
                for (let j = 0; j < arr[localI].length; j++) {
                    const localJ = j
                    if (localJ % 2 != 0) continue
                    var p = await translate(arr[localI][localJ], {to: lang})
                    arr[localI][localJ] = p
                }
                arr[localI] = arr[localI].join('')
            }
        }
        newJson[identifier] = arr.join('\n')
    }
    var sortedJson = {}
    var englishJson = JSON.parse(fs.readFileSync(`${assets}/../en/strings.json`))
    for (let key in JSON.parse(JSON.stringify(englishJson))) {
        sortedJson[key] = newJson[key]
    }
    fs.writeFileSync(`${assets}/strings.json`, JSON.stringify(sortedJson, null, 4))
}

function parseString(str) {
    const parts = str.split(/\{|\}/)
    const substrings = []
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] === '') {
            continue
        }
        if (i % 2 === 0) {
            substrings.push(parts[i])
        }
        if (i % 2 === 1) {
            substrings.push(`{${parts[i]}}`)
        }
    }
    return substrings
}

function processString(strings, identifier) {
    let string = strings[identifier]
    let lineArray = string.split('\n')
    for (let line in lineArray) {
        let parsed = parseString(lineArray[line])
        lineArray[line] = parsed
    }
    return lineArray
}
