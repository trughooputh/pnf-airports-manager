process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  lintOnSave: true,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
