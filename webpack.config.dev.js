const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: { 
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: '/'
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
  mode: 'development',
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
          {loader: 'style-loader'},
          {loader:'css-loader'},
          {loader:'sass-loader'}
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]'
        }
     },
     {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset',
    },
    {
      test: /.(mov|mp4)$/,
      use: [
          'url-loader'
      ]
    }
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
  ],
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  },
  devServer: {
    static: {
        directory: path.join(__dirname, "dist"),
    },
    compress: true,
    historyApiFallback: true,
    port: 3006,
    headers: [
      {
        key: 'Set-Cookie',
        value: 'SameSite=None; Secure',
      }
    ],
  },
};

