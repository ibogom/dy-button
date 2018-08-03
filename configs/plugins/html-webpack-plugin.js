const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
   title: 'Welcome to DY button',
   template: 'index.html',
   minify: {
       collapseWhitespace: true
   }
});