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

var version = '1.1.0';

//------------------------------;

gulp.task('distribute', function() {

    // copy d.ts
    gulp.src('src/cloudtranslation.d.ts')
        .pipe(gulp.dest('dist/' + version));

    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('dist/' + version));
});

gulp.task('default', gulp.series('distribute'));