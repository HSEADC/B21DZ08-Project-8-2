const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    static: './dev_build',
    allowedHosts: ['bf6d-212-96-69-159.eu.ngrok.io'],
  },
  output: {
    path: path.resolve(__dirname, 'dev_build')
  }
})
