const srcPath = './src';
const destPath = './dist';

const config = {
  src: {
    root: srcPath,
    html: `${srcPath}/html/*.html`,
    scss: `${srcPath}/scss/main.scss`,
    scripts: `${srcPath}/scripts/app.js`,
    fonts: `${srcPath}/assets/fonts`,
    img: `${srcPath}/assets/img`,
    icons: `${srcPath}/assets/icons`,
  },
  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    fonts: `${destPath}/fonts`,
    img: `${destPath}/img`,
  },
  watch: {
    root: srcPath,
    html: `${srcPath}/html/**/*.html`,
    scss: `${srcPath}/scss/**/*.scss`,
    scripts: `${srcPath}/scripts/**/*.js`,
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
