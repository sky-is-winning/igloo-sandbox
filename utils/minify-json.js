const fs = require('fs')
const exec = require('child_process').exec

function searchFolder(path) {
    let files = fs.readdirSync(path)
    for (let file of files) {
        if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
            searchFolder(`${path}/${file}`)
            continue
        }

        if (file.endsWith('.json')) {
            minify(`${path}/${file}`)
        }
    }
}

function minify(json) {
    var jsonFile = fs.readFileSync(json, 'utf8')
    var jsonData = JSON.parse(jsonFile)
    let regex = new RegExp('^.*/crumbs/[^/]+/[^/]+.json$')
    if (regex.test(json)) {
        fs.writeFileSync(json, JSON.stringify(jsonData, null, 4))
    } else {
        fs.writeFileSync(json, JSON.stringify(jsonData))
    }
}

if (process.argv.join(' ').includes('--search')) {
    searchFolder('./client/media')
    return
}

exec(
    'git status',
    {
        cwd: './client'
    },
    (err, stdout, stderr) => {
        if (err) {
            console.error(err)
            return
        }
        if (stderr) {
            console.error(stderr)
        }
        for (let line of stdout.split('\n')) {
            let file = line.trim()
            if (file.includes('   ')) {
                file = file.split('   ')[1]
            }
            if (file.endsWith('.json') && fs.existsSync(`./client/${file}`)) {
                minify(`./client/${file}`)
            }
        }
    }
)
