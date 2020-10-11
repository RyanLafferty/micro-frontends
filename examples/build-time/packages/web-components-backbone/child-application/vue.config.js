module.exports = {
  productionSourceMap: false,
  filenameHashing: false,
  css: {
    extract: false,
  },
  configureWebpack: (config) => {
    config.entry = {
      index: './src/main.js',
    };
    config.optimization = {
      splitChunks: false,
    };
  },
};
