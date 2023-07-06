const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp.src("./scss/main.scss").pipe(sass()).pipe(gulp.dest("./css"));
});

gulp.task("watch", function () {
  gulp.watch("./scss/main.scss", gulp.series("sass"));
});
