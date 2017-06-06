var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoPrefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var nestedCss = require('postcss-nested');

gulp.task('default', function() {
	console.log("Hooray you created a task")
});

gulp.task('html', function() {
	console.log("it works");
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([nestedCss, autoPrefixer, cssVars]))
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
	watch('./app/index.html', function() {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	})
});

