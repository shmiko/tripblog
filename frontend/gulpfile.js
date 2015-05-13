var gulp = require('gulp');
var webserver = require('gulp-webserver');
//var mainBowerFiles = require('main-bower-files');
var mainBowerFiles = require('main-bower-files');
var paths = {
    temp: 'temp',
    index: 'app/index.html'
};

gulp.task('default',['tempSetup','scriptjs', 'serve']);

gulp.task('scriptjs', function() {
  return gulp.src(mainBowerFiles({checkExistence: true}, { base: 'bower_components' }))
    .pipe(gulp.dest(paths.temp))
});

gulp.task('scripts', function(){
    gulp.src(mainBowerFiles(
      //{
      //  paths: {
      //      bowerDirectory: 'bower_components',
      //      //bowerrc: '.bowerrc',
      //      bowerJson: 'bower.json'
      //  }
      //}
    ))
    .pipe(gulp.dest(paths.temp));
});

gulp.task('tempSetup', function(){
    gulp.src(paths.index)
    .pipe(gulp.dest(paths.temp));
});

gulp.task('serve', function(){
    gulp.src(paths.temp)
    .pipe(webserver({
        open: true
    }));
});