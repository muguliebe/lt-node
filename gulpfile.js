const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const babel = require('gulp-babel')
const del = require('del')

const src = './src'
const dist = './dist'

gulp.task('clean', () => {
  return del(`${dist}/*`)
})

gulp.task('build', () => {
  return gulp.src(src + '/**/*.js')
            .pipe(babel())
            .pipe(gulp.dest(dist))
})

gulp.task('watch', ['build'], function() {
  let stream = nodemon({
    script: `${dist}/app.js`,
    watch: src,
    tasks: ['build']
  })
  return stream
})

gulp.task('dev', ['watch'])
gulp.task('default', ['dev'])
