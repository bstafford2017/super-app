const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const env = process.env.NODE_ENV || 'production';
const isProduction = env === 'production';

module.exports = {
  entry: './src/index.tsx',
  mode: env,
  devtool: isProduction ? false : 'source-map',
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
    hints: isProduction ? 'warning' : false,
    maxEntrypointSize: isProduction ? 512000 : undefined,
    maxAssetSize: isProduction ? 512000 : undefined,
  },
  optimization: isProduction
    ? {
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 240000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
        runtimeChunk: 'single',
      }
    : {},
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
        target: 'https://the-super-app.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        secure: true,
      },
    ],
    port: 8080,
    historyApiFallback: true,
  },
};
