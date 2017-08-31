var path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './index.js',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015']
                    }
                }
            }
        ]
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],

    devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: true // Tell the dev-server we're using HMR
    }
}
