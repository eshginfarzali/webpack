const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebPlugin =require('copy-webpack-plugin')
const path = require('path');

module.exports = {
entry: {
    main: path.resolve(__dirname, 'src', 'main.js')
},
    output: {
    filename: '[name].[contenthash].js', // Change 'fileName' to 'filename'
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devServer:{
    port:3000,
    // https:true,
    hot: true, //hote module replacement js bir basa deyisikleri run edir
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html'}),

      new CopyWebPlugin({
        patterns: [
            {
                from:'src/assets/',
                to:'assets'
            },
           
        ]
      })
    
    ],
};
