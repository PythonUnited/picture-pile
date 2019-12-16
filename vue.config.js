process.env.VUE_APP_VERSION = require("./package.json").version;

const fs = require("fs");
const packageJson = fs.readFileSync("./package.json");
const version = JSON.parse(packageJson).version || 0;
const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          PACKAGE_VERSION: '"' + version + '"'
        }
      })
    ]
  },

  css: {
    requireModuleExtension: true,
    sourceMap: true,
    extract: true
  },

  devServer: {
    disableHostCheck: true
  }
};
