const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const { title } = require('process');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), 
  },
 
  
  devServer: {
    static: './dist',
  }, 
  module: {
     rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     ],
   },
  mode: 'development',
  devtool: 'inline-source-map',
};