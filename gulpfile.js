var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var del = require('del');
var series = require('stream-series');
var inject = require('gulp-inject');
var gulpSync = require('gulp-sync')(gulp);

var input = {
  sass: 'public/assets/sass/**/*.scss',
  html: ['!public/plugins', 'public/**/*.html'],
  js: 'public/app/**/*.js',
  index: 'public/index.html',
  resources: 'public/assets/images/*'
}

var output = {
  css : 'build/assets/stylesheets',
  js: 'build/assets/javascript',
  html: 'build',
  index: 'build/index.html',
  resources: 'build/assets/images/'
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

gulp.task('build-js', function(){
  return gulp.src(input.js)
             .pipe(concat('bundle.js'))
             .pipe(gulp.dest(output.js))
})

gulp.task('build-resources', function(){
  return gulp.src(input.resources)
             .pipe(gulp.dest(output.resources))
})

gulp.task('inject', function(){
  var sources = gulp.src([output.css + '/**/*.css', output.js + '/**/*.js'], {read:false})
  return gulp.src(output.index)
             .pipe(inject(sources, {ignorePath: output.html}))
             .pipe(gulp.dest(output.html))
})

gulp.task('watch', function(){
  gulp.watch(input.sass, ['build-css']).on('change', function(){
    console.log('Compiling sass files')
  })

  gulp.watch(input.js, ['build-js']).on('change', function(){
    console.log('JS file has been changed')
  })

  gulp.watch(input.html, gulpSync.sync(['build-html', 'inject'])).on('change', function(){
    console.log('Building project ...')
  })
})

gulp.task('build', gulpSync.sync([['build-html', 'build-css', 'build-js', 'build-resources'], 'inject']))
