const gulp = require('gulp');
const htmlminify = require("gulp-html-minify");
const scss = require ("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const imagemin = require('gulp-imagemin');

gulp.task('build-html', function() {
    return gulp.src("app/*.html")
    .pipe (htmlminify())
    .pipe (gulp.dest("public/"))
});

gulp.task('build-sass', function() {
    return gulp.src("app/style/*.scss")
    .pipe (scss())
    .pipe (autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        cascade: false
    }))
    .pipe (cleanCSS())
    .pipe (gulp.dest("public/style/"))
});

gulp.task('build-js', function () {
  return pipeline(
        gulp.src('app/js/*.js'),
        uglify(),
        gulp.dest('public/js/')
  );
});

gulp.task('build-img', function() {
    gulp.src('app/media/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/media/'))
});


gulp.task('default', function() {
    gulp.watch("app/*.html" , gulp.series("build-html"));
    gulp.watch("app/style/*.scss" , gulp.series("build-sass"));
    gulp.watch("app/js/*.js" , gulp.series("build-js"));
    gulp.watch("app/media/" , gulp.series("build-img"));
});
