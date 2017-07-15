var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.css/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }

    ]
  }
};