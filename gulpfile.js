var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions']
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function () {
    console.log("Success! :3");
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});
