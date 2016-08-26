var gulp = require('gulp');
var del = require('del'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload');

var b = 'bower_components/';

//************ Clean WWWROOT ******
gulp.task('clean', function () {
    return del(['wwwroot/**/*']);
});

//*************** SASS ****************
gulp.task('copy:sass', function () {
    return gulp.src("wwwsrc/sass/**/*.min.css")
        .pipe(gulp.dest("wwwroot/css/"))
        .pipe(livereload());
});


//************** SCRIPTS ********************
gulp.task('copy:scripts', function () {
    return gulp.src("wwwsrc/scripts/**/*.min.js")
        .pipe(gulp.dest("wwwroot/js/"))
        .pipe(livereload());
});


//************** LIBRARYS ********************
gulp.task('copy:lib', function () {
    return gulp.src([b + 'angular/angular.min.js'])
        .pipe(gulp.dest('wwwroot/lib/'));
});

//************** AngularApp ******************
gulp.task('copy:app', function () {
    return gulp.src("wwwsrc/app/**/*.js")
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("wwwroot/js/"))
        .pipe(livereload());
});


//************ LiveReload Watch ***************
gulp.task('watch', function () {
    livereload.listen({port: 35729});

    gulp.watch('wwwsrc/sass/**/*.min.css', ['copy:sass']);
    gulp.watch('wwwsrc/scripts/**/*.min.js', ['copy:scripts']);
    gulp.watch('wwwsrc/app/**/*.js', ['copy:app']);

    //Refresh browser
    gulp.watch(['wwwroot/**/*', 'Views/**/*']).on('change', livereload.changed);
});


gulp.task('default', ['clean'], function () {
    gulp.start('copy:sass', 'copy:scripts', 'copy:lib', 'copy:app', 'watch');
});

gulp.task('deploy', ['clean'], function () {
    gulp.start('copy:sass', 'copy:scripts', 'copy:lib', 'copy:app');
});