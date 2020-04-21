// gulpfile.js
'use strict';

// Required packages grouped roughly by task
// Remember to add below packages using npm:
// npm install <package-name> --save-dev
const gulp = require('gulp');
const cp = require('child_process');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');

const flatMap = require('flat-map').default
const scaleImages = require('gulp-scale-images')
const path = require('path')

const rsync = require('gulp-rsync');

// Sass compilation. Additionally builds sourcemaps and runs
// the stylesheet through CSS Nano and Autoprefixer as PostCSS
// plug-ins
sass.compiler = require('node-sass');

function buildSass(cb) {
  return gulp.src('./_sass/**/*.scss')
    .pipe(sass({
      outputStyle: "compressed",
      includePaths: ["node_modules"]
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(gulp.dest('./_site/css'));
}

// Task to watch changes to source files and rebuild
function watchSass(cb) {
  gulp.watch('./_sass/**/*.{scss,css}', buildSass);
}

// Image resizing using gulp-scale-images and
// optimization using imagemin with non-default plugins

// This function makes two variants of each source image
const retinaVersions = (file, cb) => {
  const normalVersion = file.clone()
  normalVersion.scale = {
    maxWidth: 576,
    maxHeight: 500,
    fit: 'inside'
  }
  const retinaVersion = file.clone()
  retinaVersion.scale = {
    maxWidth: 576 * 2,
    maxHeight: 500 * 2,
    suffix: '@2x',
    fit: 'inside'
  }

  cb(null, [normalVersion, retinaVersion])
}

// By default, gulp-scale-images names files with dimensions
const imageFileName = (output, scale, cb) => {
  const fileName = [
    path.basename(output.path, output.extname),
    scale.suffix || "",
    output.extname
  ].join('')

  cb(null, fileName)
}

function minimizeImages(cb) {
  return gulp.src('./_images/**/*.{jpg,jpeg,png}')
    .pipe(newer('./_site/images/'))
    .pipe(flatMap(retinaVersions))
    .pipe(scaleImages(imageFileName))
    .pipe(imagemin([mozjpeg(), pngquant()]))
    .pipe(gulp.dest('./_site/images/'));
}

// Task to build Jekyll
// Note that here Bundler is used to manage the Ruby gems
// If you are not using Bundler, just call jekyll build
function buildJekyll(cb) {
  cp.exec('bundle exec jekyll build', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  });
}

// Task to clean _site/ and other Jekyll caches
function cleanJekyll(cb) {
  cp.exec('bundle exec jekyll clean', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  });
}

// Task to rsync files to the web server
function deploy(cb) {
  return gulp.src('_site/**')
    .pipe(rsync({
      root: '_site',
      username: 'USERNAME',
      hostname: 'HOSTNAME.TLD',
      destination: 'destination/to/blog/',
      compress: true,
      incremental: true,
    }));
}

// Task to serve the website locally
function serveJekyll(cb) {
  cp.exec('bundle exec jekyll serve', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  });
}

exports.sass = buildSass
exports.watch = watchSass
exports.jekyll = buildJekyll
exports.serve = serveJekyll
exports.clean = cleanJekyll
exports.imagemin = minimizeImages
exports.deploy = deploy

exports.build = gulp.series(
  gulp.parallel(buildSass, minimizeImages),
  buildJekyll
)