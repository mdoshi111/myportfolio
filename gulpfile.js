var gulp = require('gulp'),
  gutil = require('gulp-util'),
  concat = require('gulp-concat'),
  webserver = require('gulp-webserver');

gulp.task('log', function() {
  gutil.log("It is started");
});

gulp.task('scripts',function(){
  gulp.src('builds/development/js/*.js')
    .pipe(concat('allplugins.js'))
    .pipe(gulp.dest('builds/development/js'))

});

gulp.task('js', function() {
  gulp.src('builds/development/js/**/*')
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
});

gulp.task('css', function() {
  gulp.src('builds/development/css/*.css')
});

gulp.task('watch', function() {
  gulp.watch('builds/development/js/**/*', ['js']);
  gulp.watch('builds/development/css/*.css', ['css']);
  gulp.watch(['builds/development/*.html',
    'builds/development/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/development/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['scripts','watch', 'html', 'js', 'css', 'webserver']);
