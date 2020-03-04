// Tools
const PATHS = require('./paths');

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = {
  output: {
    filename: 'js/[name].js'
  },

  devtool: 'source-map',

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css',
    })
  ]
}

module.exports = prod;
