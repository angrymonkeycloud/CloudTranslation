var gulp = require('gulp');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

//------------------------------
// VERSIONING

// Major: major updates.
// Minor: minor updates which affects previous version.
// Patch: minor updates or bug fixing which doesn't affect previous version.

var version = '1.0.0';

//------------------------------;

gulp.task('distribute', function() {

    var minorVersioning = version.split('.')[0] + '.' + version.split('.')[1];

    // copy d.ts
    gulp.src('src/cloudtranslation.d.ts')
        .pipe(gulp.dest('dist/' + version))
        .pipe(gulp.dest('dist/' + minorVersioning));

    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('dist/' + version))
        .pipe(gulp.dest('dist/' + minorVersioning));
});

gulp.task('default', gulp.series('distribute'));