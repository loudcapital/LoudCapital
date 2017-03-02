// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var src = "static/css/*.scss"

gulp.task('sass', function() {
    gulp.src(src)
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['sass'], function() {
    gulp.watch(src, ['sass']);
})