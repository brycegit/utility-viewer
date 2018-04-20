module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: __dirname + '/ui/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: __dirname
  }
};