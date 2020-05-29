const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getFileName = (extension) => `bundle[contenthash].${extension}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: getFileName('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    port: 1337,
    compress: false,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
            },
          },
          'eslint-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: false,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: getFileName('css'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'markup/css'),
          to: path.resolve(__dirname, 'dist/css'),
        },
        {
          from: path.resolve(__dirname, 'markup/fonts'),
          to: path.resolve(__dirname, 'dist/fonts'),
        },
        {
          from: path.resolve(__dirname, 'markup/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
      ],
    }),
  ],
};
