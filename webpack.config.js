const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: './dist/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015',
      }
    ],
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ]
}
