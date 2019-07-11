var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function(){
    console.log('I am styling myself, woo hoo');
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .on('error', function(err){
            console.log(err.toString());
            console.log('THIS is... ' + this);
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});