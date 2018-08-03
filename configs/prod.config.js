const baseConfig = require('./base.config')
const globalVariables = require('./varaibles/global.variables.webpack')

/** PLUGINS **/
const uglifyJsPlugin = require('./plugins/uglify-js-plugin')
const CopyWebpackPlugin = require('./plugins/copy-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = Object.assign({}, baseConfig, {

  entry: {
    main: './js/main'
  },

  externals: [
    nodeExternals()
  ],

  output: {
    path: globalVariables.DIST_PATH,
    filename: 'main.min.js',
    publicPath: '/',
    library: 'chatWidget',
    libraryTarget: 'commonjs2'
  },

  target: 'node',

  plugins: [
    ...baseConfig.plugins,
    uglifyJsPlugin,
    CopyWebpackPlugin
  ]
})