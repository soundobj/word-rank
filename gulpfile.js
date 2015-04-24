var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("test", shell.task(['npm test']));

gulp.task('watch', function(){
    gulp.watch(['es6/**/*.js','test/**/*.js'],['test']);
});