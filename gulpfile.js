// Sass configuration
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer');

var paths = {
    scss: './static/css/*.scss'
};

gulp.task('styles', function() {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', function() {
    gulp.watch(paths.scss, ['styles']);
});
