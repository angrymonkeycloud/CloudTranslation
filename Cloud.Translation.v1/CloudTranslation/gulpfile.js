var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function() {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(minify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});