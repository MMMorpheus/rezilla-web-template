import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import gulpIf from 'gulp-if';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminZopfli from 'imagemin-zopfli';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminGiflossy from 'imagemin-giflossy';
import imageminSvgo from 'imagemin-svgo';
import favicons from 'gulp-favicons';
import debug from 'gulp-debug';

import config from '../config.js';

const compressImg = () => {
  return gulp
    .src([config.src.img, config.src.icons])
    .pipe(
      plumber(
        notify.onError({
          title: 'COMPRESS IMG',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(newer(config.dest.img))
    .pipe(
      gulpIf(
        config.isProd,
        imagemin({
          plugins: [
            // Gif
            imageminGiflossy({
              optimizationLevel: 3,
              optimize: 3,
              lossy: 2,
            }),
            // Png
            imageminPngquant({
              speed: 5,
              quality: [0.6, 0.8],
            }),
            imageminZopfli({
              more: true,
            }),
            // Jpeg
            imageminMozjpeg({
              progressive: true,
              quality: 90,
            }),
            // Svg
            imageminSvgo({
              plugins: [
                { removeViewBox: false },
                { removeUnusedNS: false },
                { removeUselessStrokeAndFill: false },
                { cleanupIDs: false },
                { removeComments: true },
                { removeEmptyAttrs: true },
                { removeEmptyText: true },
                { collapseGroups: true },
              ],
            }),
          ],
        })
      )
    )
    .pipe(gulp.dest(config.dest.img))
    .pipe(
      debug({
        title: 'Images',
      })
    );
};

const toWebp = () => {
  return gulp
    .src(config.src.imgToWebp)
    .pipe(
      plumber(
        notify.onError({
          title: 'TO WEBP',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(newer(config.dest.img))
    .pipe(gulpIf(config.isProd, webp({ quality: 80 })))
    .pipe(gulp.dest(config.dest.img))
    .pipe(
      debug({
        title: 'Webp',
      })
    );
};

const createFavicons = () => {
  return gulp
    .src(config.src.favicons)
    .pipe(
      plumber(
        notify.onError({
          title: 'FAVICON',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      favicons({
        icons: {
          appleIcon: true,
          favicons: true,
          online: false,
          appleStartup: false,
          android: false,
          firefox: false,
          yandex: false,
          windows: false,
          coast: false,
        },
      })
    )
    .pipe(gulp.dest(config.dest.favicons))
    .pipe(
      debug({
        title: 'Favicons',
      })
    );
};

export const imagesBuild = gulp.series(compressImg, toWebp, createFavicons);

export const imagesWatch = () => gulp.watch(config.watch.img, {ignoreInitial: false}, imagesBuild);
