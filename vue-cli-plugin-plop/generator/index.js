module.exports = api => {
  api.extendPackage({
    scripts: {
      plop: 'plop --plopfile generators/plopfile.js'
    },
    // devDependencies: {
    //   plop: '2.7.4'
    // }
  })
  api.render('./template')
}
