var gulp = require('gulp');
var gulp_concat = require('gulp-concat');

// create task for scripts
gulp.task('scripts', function(){
	return gulp.src('public/javascripts/**/*.js')
							.pipe(gulp_concat('main.js'))
							.pipe(gulp.dest('build/js'));
}); 

gulp.task('default', ['scripts']);