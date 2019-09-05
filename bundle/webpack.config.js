const path = require('path');
// const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'arduino-bundle.js'
  },
};