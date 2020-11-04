module.exports = {
  configureWebpack: {
    externals: ['vue', 'vue-router', /^@pccw\/.+/]
  }
}