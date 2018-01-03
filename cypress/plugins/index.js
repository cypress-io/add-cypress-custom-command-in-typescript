const wp = require('@cypress/webpack-preprocessor')

const webpackOptions = {
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
        options: {
          configFile: '../../tsconfig.json',
        },
      },
    ],
  },
}

module.exports = on => {
  const options = {
    webpackOptions,
  }
  on('file:preprocessor', wp(options))
}
