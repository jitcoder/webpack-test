const path = require('path');
const webpack = require('webpack');

const babelConfig = {
  presets: ['es2015', 'react']
}

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/dev-server');
  }

  return sources;
}

module.exports = {
  entry: {
    helloWorld: getEntrySources(['./src/apps/helloworld.jsx']),
  },
  output: {
    filename: './public/assets/js/[name].js'
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
        loaders: ['react-hot', `babel?${JSON.stringify(babelConfig)}`],
        exclude: /node_modules/,
      }
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    root: path.join(__dirname, 'src'),
  },
  extensions: ['.js', '.jsx']
};
