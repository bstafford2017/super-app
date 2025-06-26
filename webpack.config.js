const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.tsx',
  mode: env,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      inject: true,
    }),
  ],
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'https://nqufs2zgid.execute-api.us-east-1.amazonaws.com/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        secure: true,
      },
    ],
    port: 8080,
    historyApiFallback: true,
  },
};
