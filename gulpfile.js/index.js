'use strict';

// Global Requires
const gulp = require('gulp');
const argv = require('minimist')(process.argv.slice(2));
const browserSync = require('browser-sync').create();

// Project Configuration
const paths = require('../_assets/gulp-config/paths.js');

let browser = false;

// Gulpfile Sub-Sections
const css = require('./sass.js');
const deploy = require('./deploy.js');
const html = require('./html.js');
const images = require('./images.js');
const javascript = require('./javascript.js');
const jekyll = require('./jekyll.js');

// exports.css = css;
// exports.deploy = deploy;
// exports.html = html;
// exports.images = images;
// exports.javascript = javascript;
// exports.jekyll = jekyll;

// Global Tasks
function reload() {
  if(paths.config.serve && browser) {
    browserSync.reload();
  }
  return;
}
gulp.task('reload', reload);

function serve() {
  if(paths.config.serve && !browser) {
    browserSync.init({
      injectChanges: true,
      watch: true,
      server: {
        baseDir: "_site"
      }
    });
    browser = true;
  }
  return;
}
gulp.task('serve', serve);

gulp.task('info', (cb) => {
  console.log("* gulp [watch|build] --serve true to start BrowserSync");
  console.log("* gulp watch [--serve true] to rebuild on save");
  console.log("* gulp build [--serve true] to rebuild once");  
  console.log("* gulp deploy to upload changes via FTP");
});

gulp.task('log', (cb) => {
  //console.log('Test...');
  console.log(`Environment ${env} - BrowserSync: ${paths.config.serve}`);
  console.log(`Site source ${paths.jekyllDir}`);
  console.log(`Site destination ${paths.siteDir}`);
  cb();
});
gulp.task('test', gulp.series('log', 'serve'));

gulp.task('watchJekyll', (cb) => {
console.log(`Watching: [${paths.jekyllHtmlFilesGlob}, ${paths.jekyllMarkdownFilesGlob}, ${paths.jekyllAssetsDir}+'**/*']`);
  serve();
  return gulp.watch([paths.jekyllHtmlFilesGlob, paths.jekyllMarkdownFilesGlob], gulp.series('buildJekyllIncremental', 'minifyHtml'));
  cb();
});

// gulp [watch|build|buildHtml] --serve true if browsersync required
gulp.task('images', gulp.series('minimizePostImages', 'minimizeImages')); // Images only - slow so split from 'build'
gulp.task('buildHtml', gulp.series('buildJekyll', 'minifyHtml', 'serve')); // Jekyll & HTML only for faster rebuild
gulp.task('build', gulp.series('buildSass', 'buildJekyll', 'minifyJs', 'minifyHtml')); // run 'images' first if required. run 'deploy' after to upload changes
gulp.task('watch', gulp.series(gulp.parallel('serve', 'watchJs', 'watchImages', 'watchJekyll', 'watchSass'))); // gulp watch --serve true if browsersync required

gulp.task('default', gulp.series('watch'));