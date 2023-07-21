import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import replace from 'gulp-replace';
import sassGlob from 'gulp-sass-glob';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import qcmd from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

import config from '../config.js';

const sass = gulpSass(dartSass);

export const stylesBuild = () => {
  return gulp
    .src(config.src.scss, { sourcemaps: config.isDev })
    .pipe(
      plumber(
        notify.onError({
          title: 'SCSS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(replace(/@img\//g, '../img/'))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(
      gulpIf(
        config.isProd,
        autoPrefixer({
          grid: true,
          cascade: true,
        })
      )
    )
    .pipe(
      gulpIf(
        config.isProd,
        qcmd()
      )
    )
    .pipe(
      gulpIf(
        config.isProd,
        cleanCSS({
          level: 2,
        })
      )
    )
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(gulp.dest(config.dest.css));
};

export const stylesWatch = () => gulp.watch(config.watch.scss, stylesBuild);
