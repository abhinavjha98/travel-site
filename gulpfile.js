var gulp = require('gulp'),
watch = require('gulp-watch');
gulp.task('default',function(){
	console.log("HO");
});

gulp.task('html',function(){
	console.log("why so man");
});

gulp.task('styles',function(){
	console.log("why so man in styles");
});

gulp.task('watch',function(){
	 watch('./app/index.html',function(){
	 	gulp.start('html');
	 });
	 watch('./app/assets/styles/**/*.css',function(){
	gulp.start('styles');
});
});

