var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', gulp.series('withoutVersioning', 'withVersioning'));

gulp.task('withoutVersioning', function() {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));

});

gulp.task('withVersioning', function() {

    var version = '1.0.0';

    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(rename('cloudtranslation-' + version + '.js'))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});