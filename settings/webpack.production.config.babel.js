import webpack from 'webpack'
import WebpackChunkHash from 'webpack-chunk-hash';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import baseConfig from './webpack.base.config.babel'

baseConfig.output.filename = '[name].[chunkhash].js';

baseConfig.plugins.push(
    new WebpackChunkHash(),
    new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        comments: false,
        compress: {
            warnings: false
        }
    }),
    new BundleAnalyzerPlugin(),
);

baseConfig.devtool = 'nosources-source-map';

export default baseConfig