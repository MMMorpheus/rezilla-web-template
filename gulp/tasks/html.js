import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import fileinclude from 'gulp-file-include';
import replace from 'gulp-replace';
import { stream } from 'browser-sync';
import config from '../config.js';

export const htmlBuild = () => {
  return gulp
    .src(config.src.html)
    .pipe(
      plumber(
        notify.onError({
          title: 'HTML',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(fileinclude())
    .pipe(replace(/@img\//g, 'img/'))
    .pipe(gulp.dest(config.dest.html))
    // .pipe(stream());
};

export const htmlWatch = () => gulp.watch(config.watch.html, htmlBuild)
