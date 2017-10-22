var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    eslint = require('gulp-eslint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano');


gulp.task('styles',function(){
  return gulp.src('./src/css/*.scss')
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./dist/css/'));
});
gulp.task('scripts',function(){
  return gulp.src('./src/js/*.js')
  .pipe(concat('scripts.js'))
  .pipe(uglify())
  .pipe(rename({extname: '.min.js'}))
  .pipe(gulp.dest('./dist/js/'));
});


gulp.task('watch', function(){
  gulp.watch('./src/css/*.scss',['sass'])
  gulp.watch('./src/js/*.js',['scripts','reload'])
  gulp.watch('./*html',['reload'])
});

gulp.task('reload', function(){
  browserSync.reload();
});

gulp.task('browser-sync', function(){
  browserSync.init({
    server:{
      base: "./"
    }
  });
});
gulp.task('default',['watch','browser-sync'])

gulp.task('eslint', function(){

});
gulp.task('sass', function(){
   gulp.src('./src/css/*.scss')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers:['last 2 versions']
  }))
  .pipe(gulp.dest('./dist/css'))
  .pipe(concat('styles.css'))
  .pipe(cssnano())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.reload({stream:true}));
});
