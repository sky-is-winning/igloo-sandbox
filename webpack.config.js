const path = require('path')

const BannerPlugin = require('./webpack_plugins/BannerPlugin')
const DefinePlugin = require('webpack').DefinePlugin
const WebpackObfuscator = require('webpack-obfuscator')

let config = {
    mode: 'development',
    entry: './src/Game.js',
    output: {
        filename: 'igloo-sandbox.js',
        path: path.resolve(__dirname, 'assets/scripts/client')
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

        config.plugins = [
            new DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
                'VERSION': JSON.stringify(require('./package.json').version)
            }),
            new WebpackObfuscator({
                rotateStringArray: true,
                reservedStrings: ['\s*']
            }, []),
            new BannerPlugin({
                banner: `Igloo Sandbox ${require('./package.json').version}. Some content from https://github.com/wizguin/yukon. License: MIT. ${new Date().toISOString()}`
            })
        ]
    }

    return config
}
