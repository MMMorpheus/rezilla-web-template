import gulp from 'gulp';
import config from './gulp/config.js';
import { clean, server, htmlBuild, htmlWatch } from './gulp/tasks/index.js';

config.setEnv();

export const build = gulp.series(clean, gulp.parallel(htmlBuild));

export const watch = gulp.series(build, gulp.parallel(server, htmlWatch));
