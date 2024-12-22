global.$ = {
  gulp: require('gulp'),
  gp:   require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  del: require('del'),
  sassCompiler: require('gulp-sass')(require('sass')),// Явно настроенный компилятор
  path: {
    config: require('./gulp/config.js'),
    jquery: './js/jquery.js',
    js: './js/**/*.js',
  }
};
//$.path.config = ['./gulp/tasks/sass.js']; // Добавляем путь к вашей задаче
$.path.config.forEach(function(path) {
  require(path)();
});