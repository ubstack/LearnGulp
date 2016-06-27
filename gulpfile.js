require('es6-promise').polyfill();

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


gulp.task('process-styles', function () {
    return gulp.src('./src/styles/sass/main.scss')
        .pipe(sass({
            styles: 'expanded',
            errLogToConsole: true,
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        //.pipe(minifycss())
        .pipe(gulp.dest('./src/styles/css/'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('./src/styles/minified/'));
});

gulp.task('process-scripts', function () {
    return gulp.src('./src/scripts/js/*.js')
        .pipe(concat("main.js"))
        .pipe(gulp.dest('./src/scripts/js/'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./src/scripts/minified/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/scripts/js/*.js', ['process-scripts']);
});

gulp.task('default', function () {
    console.log('Welcome to Gulp.');
});