// JAVASCRIPT TASKS
'use strict';

/*
- Watch for _assets JS changes
- Concat
- Minimize
- Copy to _site/assets/js
- If 'serve' - browsersync
*/

// Global Requires
const gulp = require('gulp');
const gulpif = require('gulp-if');
const newer = require("gulp-newer");
const uglify = require('gulp-terser');
const useref = require('gulp-useref');
const paths = require('../_assets/gulp-config/paths.js');

// Tasks
gulp.task('minifyJs', (cb) => {
  console.log(`Reading JS from ${paths.jekyllHtmlFilesGlob} & ${paths.jsFilesGlob}`);
  console.log(`Writing JS to ${paths.siteJsFiles}`);
  let stream = gulp.src(paths.jekyllHtmlFilesGlob)
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulp.dest(paths.siteJsFiles));    
  
  if(paths.config.serve) {
    stream = stream.pipe(browserSync.stream());
  }

  return stream;
});

// Watch Tasks
gulp.task('watchJs', () => {
  console.log(`Watching JS: ${paths.jsFilesGlob}`);
  gulp.watch(paths.jsFilesGlob, gulp.series('minifyJs'));
});