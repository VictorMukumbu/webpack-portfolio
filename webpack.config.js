// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  //webpack-dev-server
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"./src/template.html",
    }),
  ],
  module: {
    rules: [
      //css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //html images
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      //js images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }
    ],
  },
};
