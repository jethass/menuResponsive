var gulp = require('gulp'),
    compass=require('gulp-compass'),
    plumber=require('gulp-plumber'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('compass',function(){

   /*transformer scss to css */
    return  gulp.src('css/*.scss')
     .pipe(plumber())
     .pipe( compass({
     	css: 'css',
     	sass: 'css',
     	image: 'img'
     }) )
     .pipe( gulp.dest('css') );

});    

gulp.task('less',function(){

return gulp.src('css/*.less')
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'));

});