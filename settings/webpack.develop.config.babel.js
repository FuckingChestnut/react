import webpack from 'webpack';
import baseConfig from './webpack.base.config.babel'

const tempConfig = Object.assign({}, baseConfig, {
    devServer: {
        inline: true,
    },
    devtool: "source-map",
});

tempConfig.output.filename = '[name].js';

tempConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
);

export default tempConfig;