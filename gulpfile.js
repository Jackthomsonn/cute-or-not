'use strict';
(function() {
  var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    express = require('express'),
    mainBowerFiles = require('main-bower-files'),
    nodemon = require('gulp-nodemon');

  // Gulp Tasks

  // Set development node env
  gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = 'development';
  });

  // Set production node env
  gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
  });

  // Run up our server
  gulp.task('serve', ['set-dev-node-env'], () => {
    nodemon({
      script: './src/server/index.js'
    });
  });

  // Complile sass files
  gulp.task('sass', () => {
    gulp.src('./src/assets/scss/**/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/assets/css'));
  });

  // Concatenate all js files into one
  gulp.task('concat', () => {
    return gulp.src([
      './src/client/app/**/**/**/*.js',
      '!./src/client/app/**/**/**/*.spec.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/client/app'));
  });

  // Move html files over to the dist directory
  gulp.task('html', () => {
    gulp.src('./src/**/**/*.html')
      .pipe(gulp.dest('dist'));
  });

  // Watch for any changes of sass, js or html files
  gulp.task('watch', () => {
    gulp.watch('./src/assets/scss/**/**/*.scss', ['sass']);
    gulp.watch('./src/client/app/**/**/**/*.js', ['concat']);
    gulp.watch('./src/server/**/**/**/*.js', ['dist']);
    gulp.watch('./src/**/**/*.html', ['html']);
  });

  // Put all our bower components into one folder
  gulp.task('bower', () => {
    return gulp.src(mainBowerFiles())
    .pipe(gulp.dest('dist/assets/vendors'));
  });

  // Minify images and place them into the dist directory
  gulp.task('images', () => {
    return gulp.src('src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'));
  });

  // Clean up the images folder on every run
  gulp.task('clean', () => {
    return gulp.src('dist/assets/images', {read: false})
		.pipe(clean());
  });

  // Move server to dist directory
  gulp.task('move-server', () => {
    gulp.src('./src/server/**/**/*.js')
      .pipe(gulp.dest('dist'));
  });

  // Prepare all files for distribution
  gulp.task('dist', ['html', 'images', 'move-server', 'concat', 'sass']);

  // Default task to run everything
  gulp.task('default', ['serve', 'clean', 'dist', 'bower', 'watch']);

})();
