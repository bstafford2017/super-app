const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'docs'),
    publicPath: '/fact-app'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  performance: {
    hints: false
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
  },
}
