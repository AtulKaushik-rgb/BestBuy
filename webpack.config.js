const webpack = require('webpack');
const path = require('path');


const config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath : '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    //   {
    //     test: /\.ttf$/,
    //     use: [
    //       {
    //         loader: 'ttf-loader',
    //         options: {
    //           name: './font/[hash].[ext]',
    //         },
    //       },
    //     ]
    // },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' }
    // {
    //   test: /\.(sass|less|css)$/,
    //   loader: ['style-loader', 'css-loader', 'less-loader']
    // }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }


};
module.exports = config;