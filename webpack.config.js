const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tff$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
<<<<<<< HEAD
  watch: true,
=======
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
>>>>>>> 9f127eceeb37c68697e444c8d501aa1a0f2a42cd
};
