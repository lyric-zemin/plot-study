var gulp = require('gulp')

var paths = {
  template: {
    src: 'generators/**/*.hbs',
    dest: 'vue-cli-plugin-plop/generator/template/generators'
  }
}

/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = function () {
  return gulp.src(paths.template.src).pipe(gulp.dest(paths.template.dest))
}
