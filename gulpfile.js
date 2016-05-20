var gulp = require('gulp');
var gulp_concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulp_rename = require('gulp-rename');

// create task for scripts
gulp.task('scripts', function(){
	return gulp.src('public/javascripts/*.js')
						.pipe(gulp_concat('main.js'))
							.pipe(gulp_rename({suffix: '.min'}))
								.pipe(uglify())
							.pipe(gulp.dest('build/js'));
}); 

gulp.task('default', ['scripts']);