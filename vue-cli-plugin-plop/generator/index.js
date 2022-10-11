module.exports = api => {
  api.extendPackage({
    scripts: {
      // plop: 'plop --plopfile generators/plopfile.js'
      plop: 'vue-cli-service plop'
    }
  })
  // api.render('./template')
}
