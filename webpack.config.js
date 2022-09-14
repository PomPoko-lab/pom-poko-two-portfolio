const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');
const zlib = require('zlib');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer'),
                  new CompressionPlugin({
                    compressionOptions: {
                      numiterations: 15,
                    },
                    algorithm(input, compressionOptions, callback) {
                      return zopfli.gzip(input, compressionOptions, callback);
                    },
                  }),
                  new CompressionPlugin({
                    filename: '[path][base].br',
                    algorithm: 'brotliCompress',
                    test: /\.(js|css|html|svg)$/,
                    compressionOptions: {
                      params: {
                        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                      },
                    },
                    threshold: 10240,
                    minRatio: 0.8,
                    deleteOriginalAssets: false,
                  }),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
