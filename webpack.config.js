const path = require('path');
const webpack = require('webpack');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/dev-server');
  }

  return sources;
}

module.exports = {
  entry: {
    helloworld: getEntrySources(['apps/helloworld']),
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public/assets/js'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel']
      }
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    root: [path.join(__dirname, 'src')],
    extensions: ['', '.js', '.jsx']
  }
};
