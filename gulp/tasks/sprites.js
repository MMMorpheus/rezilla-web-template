import gulp from 'gulp'
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import svgSprite from 'gulp-svg-sprite';

import config from '../config.js'


export const svgSpriteBuild = () => {
  return gulp
    .src(config.src.svgSprite)
    .pipe(
      plumber(
        notify.onError({
          title: 'SPRITE',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg',
          example: true
        }
      }
    }))

}
