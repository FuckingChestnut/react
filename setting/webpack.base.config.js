import webpack from 'webpack'

const config = {
  entry: {
    app: ["./src/entry.js"]
  },
  output: {
    filename: "bundle.js",
    path: "/bin/",
    publicPath: "/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude:/node_modules/,
      loaders: ["babel-loader"]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    inline: true
  },
  devtool: "source-map"
}
export default config
