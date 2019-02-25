const path = require('path');

// const merge = require('webpack-merge');
// const createDefaultConfig = require('@open-wc/building-webpack/default-config');
// const defaultConfig = createDefaultConfig();

module.exports = {
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};