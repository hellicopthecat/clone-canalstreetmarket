import gulp from "gulp";
import {deleteAsync} from "del";
import gPug from "gulp-pug";
import sass2 from "sass";
import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import minify from "gulp-csso";
import webserver from "gulp-webserver";
const sass = gulpSass(sass2);

const routes = {
  pug: {
    src: "src/*.pug",
    watch: "src/**/*.pug",
    dest: "build",
  },
  style: {
    src: "src/scss/*.scss",
    watch: "src/scss/**/*.scss",
    dest: "build/style",
  },
  js: {src: "", watch: "", dest: ""},
};

const pug = () =>
  gulp.src(routes.pug.src).pipe(gPug()).pipe(gulp.dest(routes.pug.dest));

const style = () =>
  gulp
    .src(routes.style.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoPrefixer({
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.style.dest));

const ws = () =>
  gulp.src("build").pipe(webserver({livereload: true, open: true}));

const clean = async () => await deleteAsync(["build/"]);

const watch = () => {
  gulp.watch(routes.pug.watch, pug);
  gulp.watch(routes.style.watch, style);
};

const assets = gulp.series([pug, style]);
const postDev = gulp.parallel([ws, watch]);

export const dev = gulp.series([clean, assets, postDev]);
