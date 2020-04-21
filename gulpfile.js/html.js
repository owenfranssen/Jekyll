// HTML TASKS
'use strict';

/*
- Watch for _src HTML changes
- Build Jekyll
- Watch for _site HTML changes
- Minimize HTML
- ...
- If 'serve' - browsersync
*/

// Global Requires
const gulp = require('gulp');
const paths = require('../_assets/gulp-config/paths.js');
const newer = require('gulp-newer');
const htmlmin = require('gulp-htmlmin');

// Tasks
gulp.task('minifyHtml', (cb) => {
  console.log(`Reading HTML from ${paths.siteHtmlFilesGlob}`);
  console.log(`Writing HTML to ${paths.siteDir}`);
  return gulp.src(paths.siteHtmlFilesGlob)
    .pipe(newer(paths.jekyllDir + 'index.md')) // check if HTML files newer than _src/index.md which is always regenerated
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(paths.siteDir));
  cb();
});

gulp.task('useref', (cb) => {
  // return gulp.src([paths.siteHtmlFilesGlob, `${paths.siteDir}**/*.php`])
  //   .pipe(useref())
  //   .pipe(gulpif('*.js', uglify()))
  //   .pipe(gulp.dest(paths.siteHtmlFilesGlob));
  cb();
});

gulp.task('validate:html', (cb) => {
  // return gulp.src(paths.siteHtmlFilesGlob)
  //   .pipe(htmlValidator())
  //   .pipe(htmlValidator.reporter());
  cb();
});

// Watch Tasks
gulp.task('watchHtml', (cb) => {
  console.log(`Watching HTML: ${paths.siteHtmlFilesGlob}`);
  gulp.watch(paths.siteHtmlFilesGlob, gulp.series('minifyHtml', 'reload'));
});