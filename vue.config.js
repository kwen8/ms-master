module.exports = {
  publicPath: `http://localhost:8080`,
  chainWebpack: config => {
    config.devServer.set('inline', false);
    config.devServer.set('hot', true);
    // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
    // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`[name].js`);
    }
    config.externals(['vue', 'vue-router']);

    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    }
  },
  filenameHashing: false
};
