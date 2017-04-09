var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var del = require("del")

var input = {
  sass: 'public/assets/sass/**/*.scss',
  html: ['!public/lib', 'public/**/*.html']
}

var output = {
  css : 'build/assets/stylesheets',
  html: 'build'
}

gulp.task('clean', function(cb){
  del(['build'], cb)
})

gulp.task('build-css', function(){
  return gulp.src(input.sass)
             .pipe(sass())
             .pipe(concat('master.css'))
             .pipe(gulp.dest(output.css))
})

gulp.task('build-html', function(){
  return gulp.src(input.html)
             .pipe(gulp.dest(output.html))
})

gulp.task('build', ['build-html', 'build-css'])
