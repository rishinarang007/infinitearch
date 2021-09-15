const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.budle.js',
    libraryTarget: 'umd',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@redux': path.resolve(__dirname, '/src/redux/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-class-properties',
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                '@babel/plugin-proposal-class-properties',
                [
                  '@babel/plugin-transform-runtime',
                  {
                    regenerator: true,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.scss|sass|css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.bmp|gif|jpe?g|png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },
  devServer: {
    port: 9000,
    hot: true,
    contentBase: './dist',
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}
