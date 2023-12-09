const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: { 
    homePage:'./src/rag.js', 
  },
  output: {
    filename: 'main.js',
     path: path.resolve(__dirname, 'dist'), 
   },
  mode: 'development',
  devtool:'source-map',
  devServer:{
    static:'./dist',
  },
   

  
};
 