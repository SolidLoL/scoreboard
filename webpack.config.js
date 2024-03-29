const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin =require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: { 
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias:{
        '@components': path.resolve(__dirname, 'src/components/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@hooks': path.resolve(__dirname, 'src/hooks/'),
        '@reducers': path.resolve(__dirname, 'src/reducers/'),
        '@routes': path.resolve(__dirname, 'src/routes/'),
        '@containers': path.resolve(__dirname, 'src/containers/'),
        '@context': path.resolve(__dirname, 'src/context/'),
        '@assets': path.resolve(__dirname, 'src/assets/'),
    }
  },

  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin()
  ],
  optimization:{
    minimize:true,
    minimizer:[
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
};
