import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const config = {
    entry: {
        app: ["./src/entry.js"]
    },
    output: {
        filename: "bundle.js",
        path: "/bin/",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.json', '.scss'],
        alias: {
            src: path.resolve(__dirname, '../src'),
            node_modules: path.resolve(__dirname, 'node_modules')
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]',
                    'postcss-loader',
                    `sass-loader`
                ]
            })
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=1000'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ],
    devServer: {
        inline: true
    },
    devtool: "source-map"
};
export default config
