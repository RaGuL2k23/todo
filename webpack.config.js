const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: { 
    homePage:'./src/rag.js',
    todoTask:'./src/toDoPage.js',
  },
   plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      // Inject all chunks into the HTML
      chunks: ['runtime', 'homePage', 'todoTask'],
    }),
  ],
  output: {
    filename: '[name].js',
     path: path.resolve(__dirname, 'dist'), 
   },
  mode: 'development',
  devtool:'source-map',
  devServer:{
    static:'./dist',
  },
  
  optimization: {
    runtimeChunk: 'single', // Keep the single runtime chunk
    splitChunks: {
      chunks: 'all',
      minSize: 0, // Split all chunks
    },
  },

  
};
 