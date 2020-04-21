// FTP TASKS
'use strict';

// Requires
const gulp = require('gulp');
const newer = require("gulp-newer");
//const rsync = require('gulp-rsync');
const ftp = require('vinyl-ftp');
const ftpSettings = require('../.vscode/sftp.json');
const paths = require('../_assets/gulp-config/paths.js');
let conn = false;

// Tasks
// function deploy(cb) {
//   return gulp.src(`${paths.siteDir}/**`)
//     .pipe(rsync({
//       root: paths.siteDir,
//       username: ftpSettings.username,
//       password: ftpSettings.password,
//       hostname: ftpSettings.host,
//       destination: ftpSettings.remotePath,
//       compress: true,
//       incremental: true,
//       dryrun: true
//     }));
// }
// gulp.task('deploy', deploy);

function getFtpConnection() {
  return ftp.create({
    host: ftpSettings.host,
    port: ftpSettings.port,
    user: ftpSettings.username,
    password: ftpSettings.password,
    parallel: 5,
    log: console.log
  });
}

// function uploadfile(file) {
//   if (!conn) conn = getFtpConnection();
//   return gulp
//     .src(file, {
//       base: destination.base,
//       buffer: false
//     })
//     .pipe(conn.newer(config.ftp.remoteFolder)) // only upload newer files
//     .pipe(conn.dest(config.ftp.remoteFolder));
// }

gulp.task('deploy', function () {
  if (!conn) conn = getFtpConnection();

  //const remotePath = paths.config.env == 'dev' ? ftpSettings.profiles.dev.remotePath : ftpSettings.profiles.live.remotePath;
  const remotePath = ftpSettings.remotePath;

  console.log(`Deploying changed files to ${remotePath}`);

  return gulp
    .src(`${paths.siteDir}/**/*`, {
      base: paths.siteDir,
      buffer: false
    })
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});