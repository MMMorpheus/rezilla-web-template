const srcPath = './src';
const destPath = './build';

const config = {
  src: {
    root: srcPath,
    html: `${srcPath}/html/*.html`,
    scss: `${srcPath}/scss/*.scss`,
    scripts: `${srcPath}/scripts`,
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
    scss: `${srcPath}/scss/**/*.scss`
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
