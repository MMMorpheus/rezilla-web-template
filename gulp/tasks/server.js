import browserSync from 'browser-sync';
import config from '../config.js';

export const server = () => {
  browserSync.create().init({
    server: {
      baseDir: config.dest.root,
    },
    files: [
      `${config.dest.html}`,
      `${config.dest.css}/*.css`,
      `${config.dest.js}/*.js`,
      {
        match: `${config.dest.img}/**/*`,
        fn() {
          this.reload();
        },
      },
    ],
    open: false,
    notify: false,
    port: 3333,
  });
};
