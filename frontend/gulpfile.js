var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mainBowerFiles = require('main-bower-files');

var paths = {
    temp: 'temp',
    index: 'app/index.html'
};

gulp.task('default',['tempSetup','scripts', 'serve']);

gulp.task('scripts', function(){
    gulp.src(mainBowerFiles())
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