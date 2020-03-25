const WebpackAssetsManifest = require('webpack-assets-manifest');

// source: https://tarikhamilton.com/blog/2019/03/25/create-an-asset-manifest-json-like-create-react-app-using-vue-cli/
module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    config.plugins = config.plugins.concat(
      new WebpackAssetsManifest({
        output: 'asset-manifest.json',
      })
    );
  },
};
