const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

gulp.task('watch', function() {
  let stream = nodemon({
    script: `src/app.js`,
    watch: './src'
  })
  return stream
})

gulp.task('dev', ['watch'])
gulp.task('default', ['dev'])
