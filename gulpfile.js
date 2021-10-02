const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

gulp.task('serve', function () {
    browserSync.init({
        server: '.'
    });

    gulp.watch('static/scss/*.scss', gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);

})

gulp.task('sass', function () {
    return gulp.src('static/scss/*.scss').
            pipe(sass()).
            pipe(gulp.dest('static/css')).
            pipe(gulp.dest('dist/static/css')).
            pipe(browserSync.stream());
});

gulp.task('start', gulp.series('serve', 'sass'));
