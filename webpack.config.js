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
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ["style-loader","css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader:"file-loader",
        options:{
          name:'[name].[ext]',
          outputPath:'assets/images/'
          //the images will be emited to dist/assets/images/ folder
        }
      }
    ]
  },
  plugins: [
    /* Use the ProvidePlugin constructor to inject jquery implicit globals */
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery'",
        "window.$": "jquery"
    })
  ]

  
};
 