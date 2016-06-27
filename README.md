# Learning Gulp
** Learning Gulp with basic tasks

1. Gulp is a build tool similar to grunt
2. Gulp is very quick to set up
3. Saves a tone of time in automating a lot of very repetitive tasks in your development work flow
4. Speed up your development process

# Application Setup

1. $ mkdir learning-gulp
   $ cd learning-gulp
   $ npm init

2. $ npm install -g gulp
   $ npm install --save-dev gulp
   $ touch gulpfile.js
   
# Default task setup

1. var gulp = require('gulp');
   gulp.task('default', function() {
     console.log("I have configured a gulpfile");
   });
   
# Adding SASS behaviour to example
    
1. $ npm install gulp-ruby-sass --save-dev
    //https://www.npmjs.com/package/gulp-sass/)

2. var gulp = require('gulp'),
       sass = require('gulp-ruby-sass');

   gulp.task('process-styles', function() {
     return gulp.src('main.scss')
       .pipe(sass({style: 'expanded' }))
       .pipe(gulp.dest('.'))
   });

# Minifying CSS

1. $ npm install gulp-autoprefixer --save-dev
   $ npm install gulp-minify-css --save-dev
   
2. var gulp = require('gulp'),
        sass = require('gulp-ruby-sass');
        autoprefixer = require('gulp-autoprefixer'),
        minifycss = require('gulp-minify-css'),
        rename = require('gulp-rename'),
        concat = require('gulp-concat');


    gulp.task('process-styles', function() {
      return gulp.src('src/styles/main.scss')
        .pipe(sass({style: 'expanded'}))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('dest/styles/'))
        .pipe(rename({suffix: '.min'} ))
        .pipe(minifycss())
        .pipe(gulp.dest('dest/styles/'))
    });

# Processing JS

1. $ npm install gulp-concat --save-dev
   $ npm install gulp-uglify--save-dev

2. var gulp = require('gulp'),
        sass = require('gulp-ruby-sass');
        autoprefixer = require('gulp-autoprefixer'),
        minifycss = require('gulp-minify-css'),
        rename = require('gulp-rename'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify');

    gulp.task('process-scripts', function() {
      return gulp.src('src/scripts/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dest/scripts/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dest/scripts/'))
    });

# Auto running the tasks, when any file changes

1. gulp.task('watch', function() {
      gulp.watch('src/scripts/*.js', ['process-scripts'])
    });
	
	