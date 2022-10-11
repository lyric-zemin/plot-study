module.exports = api => {
  api.extendPackage({
    scripts: {
      plop: 'plop --plopfile generators/plopfile.js'
    }
  })
  api.render('./template')
}
