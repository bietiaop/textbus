const gulp = require('gulp');

gulp.task('copy', function () {
  return gulp.src('./src/lib/assets/**/*').pipe(gulp.dest('./package/bundles/scss/'));
});

gulp.task('default', gulp.series('copy'));
