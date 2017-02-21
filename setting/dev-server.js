import webpack from 'webpack'
import devServer from 'webpack-dev-server'

import config from './webpack.base.config'

config.entry.app.unshift(
  "webpack/hot/dev-server",
  "webpack-dev-server/client?http://localhost:8080"
);
const compiler = webpack(config);
const server = new devServer(compiler, {
  hot: true
});
server.listen(8080);
