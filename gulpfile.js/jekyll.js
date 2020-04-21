// JEKYLL SITE BUILDER TASKS
'use strict';

// Global Requires
const gulp = require('gulp');
const cp = require('child_process');
const paths = require('../_assets/gulp-config/paths.js');

// Task to build Jekyll
// Note that here Bundler is used to manage the Ruby gems
// If you are not using Bundler, just call jekyll build
function buildJekyll(cb) {
    // JEKYLL_ENV=development bundle exec ...
  cp.exec('bundle exec jekyll build', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  });
}
gulp.task('buildJekyll', buildJekyll);

function buildJekyllIncremental(cb) {
  if(paths.config.incremental) {
    cp.exec('bundle exec jekyll build -I', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  } else {
    buildJekyll(cb);
  }
}
gulp.task('buildJekyllIncremental', buildJekyllIncremental);

// Task to clean _site/ and other Jekyll caches
function cleanJekyll(cb) {
  cp.exec('bundle exec jekyll clean', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  });
}
gulp.task('cleanJekyll', cleanJekyll);

// Task to serve the website locally
function serveJekyll(cb) {
  cp.exec('bundle exec jekyll serve', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  });
}