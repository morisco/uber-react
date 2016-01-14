var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var react = require('gulp-react');
var babel = require('gulp-babel');

var path = {
  HTML: 'views/index.html',
  JS: ['client/*/*/*.jsx', 'client/js/*.js'],
  SASS: ['client/*/*/styles.scss'],
  MINIFIED_OUT: 'build.min.js',
  MINIFIED_SASS: 'build.min.css',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

gulp.task('scripts', function() {
	gulp.src(path.JS)
    .pipe(react())
    .pipe(concat(path.MINIFIED_OUT))
    .pipe(babel({
      presets: ['es2015']
    }))
    // .pipe(uglify())
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('sass', function () {
	gulp.src(path.SASS)
	.pipe(concat(path.MINIFIED_SASS))
	.pipe(minify())
	.pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('watch', function() {
  gulp.watch(['client/*/*.js', 'client/*/*/*.jsx'], [ 'scripts' ]);
  gulp.watch(['client/*/*/styles.scss'], [ 'sass' ]);
});

gulp.task('default', [ 'scripts', 'sass', 'watch' ]);
