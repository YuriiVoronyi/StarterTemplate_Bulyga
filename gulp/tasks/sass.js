module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('sass/style.scss')
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.sassCompiler()) // Используем явный компилятор
        .pipe($.gp.autoprefixer())
        .pipe($.gp.csso())
        .pipe($.gp.rename('style.min.css'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/css'))
        .pipe($.browserSync.stream());
  });
};