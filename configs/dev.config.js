const baseConfig = require('./base.config')
const globalVariables = require('./varaibles/global.variables.webpack')
const htmlWebpackPlugin = require('./plugins/html-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {

  devtool: 'source-map',

  devServer: {
    contentBase: globalVariables.DIST_PATH,
    host: globalVariables.HOST_NAME,
    port: globalVariables.DEV_SERVER_PORT,
    historyApiFallback: true,
    hot: true
  },

  plugins: [
    ...baseConfig.plugins,
    htmlWebpackPlugin
  ]

})