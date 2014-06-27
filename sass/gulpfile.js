var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
  sass: 'scss/**/*.scss'
};

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['watch', 'sass']);
