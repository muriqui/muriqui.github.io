const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: () => {
    const entries = {};
    entries.style = path.resolve(__dirname, 'src/index.js');
    return entries;
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        style: {
          name: "style",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      },
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css",
    })
  ],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
    clean: true
  }
};
