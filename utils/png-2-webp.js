const fs = require('fs')
const exec = require('child_process').exec

function searchForPNGs(path) {
    let files = fs.readdirSync(path)
    for (let file of files) {
        if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
            searchForPNGs(`${path}/${file}`)
            continue
        }

        if (file.endsWith('.png')) {
            console.log(`Found png at ${path}/${file}, converting to webp`)
            exec(`cwebp -q 100 ${path}/${file} -o ${path}/${file.replace('.png', '.webp')}`, (err, stdout, stderr) => {
                if (err) {
                    console.error(err)
                    return
                }
                if (stderr) {
                    console.error(stderr)
                }
                console.log(stdout)
                fs.unlinkSync(`${path}/${file}`)
            })
            continue
        }

        if (file.endsWith('.json')) {
            var jsonFile = fs.readFileSync(`${path}/${file}`, 'utf8')
            if (jsonFile.includes('.png')) {
                console.log(`${path}/${file} contains a link to a png file, replacing with webp`)
                jsonFile = jsonFile.replaceAll(/\.png/g, '.webp')
                fs.writeFileSync(`${path}/${file}`, jsonFile)
                continue
            }
        }
    }
}

searchForPNGs('./client/media')
