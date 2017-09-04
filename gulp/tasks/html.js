'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('html', () => {
  const options = {
    basedir: 'src/views/'
  };
  return gulp.src([
    './src/views/*.html',
    './src/views/**/*.html'
  ])
    .pipe($.changed('./dist/', {
      extension: '.html',
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});
