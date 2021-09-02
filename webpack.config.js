const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    css: path.resolve(__dirname, 'src', 'css.js'),
    script: path.resolve(__dirname, 'src', 'script.js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          'postcss-loader',
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
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /styles\.css$/,
          chunks: 'all',
          enforce: true,
        },
        print: {
          name: 'print',
          test: /print\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => `css/${chunk.name.replace('/js/', '/css/')}.css`,
    })
  ],
  output: {
    path: path.resolve(__dirname, 'docs', 'assets'),
    filename: 'js/[name].js',
    clean: true,
  }
};
