var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('autoprefixer'),
	postcss = require('gulp-postcss'),
	cleanCSS = require('gulp-clean-css');
 
gulp.task('less', function () {
	var plugins = [
        autoprefixer({browsers: ['last 5 version']})
    ];
    gulp.src('src/style/style.less')
		.pipe(less())
		.pipe(postcss(plugins))
		.pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});