const path = require('path')

const BannerPlugin = require('./webpack_plugins/BannerPlugin')
const DefinePlugin = require('webpack').DefinePlugin
const WebpackObfuscator = require('webpack-obfuscator')

let config = {
    mode: 'development',
    entry: './src/Game.js',
    output: {
        filename: 'igloo-sandbox.js',
        path: path.resolve(__dirname, 'client/scripts/client')
    },
    optimization : {
        minimize: false
    },
    devServer: {
        static: {
            directory: path.join(__dirname),
            publicPath: '/'
        },
        devMiddleware: {
            writeToDisk: true
        },
        proxy: {
            '/world/login': {
                target: 'http://localhost:6111',
                pathRewrite: { '^/world/login': '' },
                ws: true
            },

            '/world/blizzard': {
                target: 'http://localhost:6112',
                pathRewrite: { '^/world/blizzard': '' },
                ws: true
            }
        },
        host: 'localhost',
        port: 8888,
        hot: false,
        liveReload: false
    },
    resolve: {
        alias: {
            '@engine': path.resolve(__dirname, 'src/engine'),
            '@scenes': path.resolve(__dirname, 'src/scenes'),
            '@components': path.resolve(__dirname, 'src/scenes/components'),
            '@rooms': path.resolve(__dirname, 'src/scenes/rooms'),
            '@games': path.resolve(__dirname, 'src/scenes/games'),
            '@igloos': path.resolve(__dirname, 'src/scenes/igloos'),
            '@parties': path.resolve(__dirname, 'src/scenes/parties')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version)
        })
    ]
}

module.exports = (env, argv) => {
    config.output.filename = 'igloo-sandbox.min.js'
    if (argv.mode === 'production') {
        config.optimization.minimize = true

        if (env.obfuscate === 'true') {
            config.plugins.push(
                new WebpackObfuscator({
                    rotateStringArray: true,
                    reservedStrings: ['\s*']
                }, [])
            )
        }

        config.plugins.push(
            new BannerPlugin({
                banner: `CP+ Version ${require('./package.json').version}\nClub Penguin Plus is a fan-made project and is not affiliated with Disney or Club Penguin.\nThe Club Penguin Plus client is based off https://github.com/wizguin/yukon which is under the MIT License.\nYukon is the copyright of its respective authors and Club Penguin Plus does not claim ownership of any of this work.\n\nMIT License\n\nCopyright (c) 2022 wizguin <https://github.com/wizguin>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n\nAnything written by the Club Penguin Plus team is not under the same license.\nYou do not have permission to use, copy, modify, reverse-engineer, or distribute any code made specifically for Club Penguin Plus.\nFor more info, review our terms of service at https://cpplus.pw/en/terms`
            })
        )
    }

    return config
}
