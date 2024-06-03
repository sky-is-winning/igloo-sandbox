const fs = require('fs')
const path = require('path')

// Function to generate a preview file based on a source file
function generatePreview(sourceFilePath) {
    const sourceFileName = path.basename(sourceFilePath, '.js')
    const previewFileName = sourceFilePath.replace(sourceFileName, `${sourceFileName}-preview`)

    // Read the content of the source file
    fs.readFile(sourceFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading source file: ${err}`)
            return
        }

        // Modify the content to generate the preview
        let previewContent = data.replace(/super\([^)]*\)/, '')
        previewContent = previewContent.replace('\n\n', '\n')
        previewContent = previewContent.replace(/constructor\(\) {/, `constructor() {\n        super(\`${sourceFileName}-preview-\${Date.now()}\${Phaser.Math.Between(0,10000)}\`)`)
        previewContent = previewContent.replace(/\/\* END-USER-CTR-CODE \*/, 'this.isPreview = true\n\n        /* END-USER-CTR-CODE *')

        // Write the modified content to the preview file
        fs.writeFile(previewFileName, previewContent, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing preview file: ${err}`)
            } else {
                console.log(`Preview file '${previewFileName}' generated successfully.`)
            }
        })
    })
}

// Call the function to generate the preview
//generatePreview(sourceFilePath);

let folders = fs.readdirSync('./src/scenes/igloos')
folders.forEach((folder) => {
    if (!folder.includes('crates') && !folder.includes('.')) {
        fs.readdirSync(`./src/scenes/igloos/${folder}`).forEach((file) => {
            if (file.includes('.js') && !file.includes('preview')) {
                generatePreview(`./src/scenes/igloos/${folder}/${file}`)
            }
        })
    }
})
