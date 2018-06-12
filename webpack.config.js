const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}