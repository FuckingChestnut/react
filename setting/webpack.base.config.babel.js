import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

console.log(__dirname)
const config = {
    entry: {
        app: ["./src/entry.js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, '../dist'),
        publicPath: "./"
    },
    resolve: {
        extensions: ['.js', '.json', '.scss'],
        alias: {
            src: path.resolve(__dirname, '../src'),
            node_modules: path.resolve(__dirname, '../node_modules')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader'
                }]
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
            allChunks: true,
            disable: false,
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './template.html'
        }),
    ],
    devServer: {
        inline: true
    },
    devtool: "source-map"
};
export default config
