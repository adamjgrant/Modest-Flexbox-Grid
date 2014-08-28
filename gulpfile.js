var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-ruby-sass');

gulp.task('default', function() {
  gulp.src('index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))

  gulp.src('style.sass')
    .pipe(sass())
    .pipe(gulp.dest('./'))
});
