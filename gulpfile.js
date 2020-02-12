var gulp = require('gulp');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

//------------------------------
// Semantic Versioning

// 1. Major: Changes that break backward compatibility | Increment the first digit and reset middle and last digits to zero.
// 2. Minor: Backward compatible new features | Increment the middle digit and reset last digit to zero.
// 3. Patch: Backward compatible bug fixes | Increment the third digit.
// more info at: https://semver.org/

var version = '1.2.1';

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