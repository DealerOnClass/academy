var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    compass     = require('gulp-compass'),
    plumber     = require('gulp-plumber'),
    prefix      = require('gulp-autoprefixer'),
    cp          = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

//  Build the Jekyll Site
//  http://stackoverflow.com/questions/21856861/running-jekyll-as-a-child-process-in-gulp-node
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll.bat', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

//  Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

//  Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['compass', 'jekyll-build'], function() {
    browserSync.init({
        server: '_site',
        notify: false
    });
});

//  Compile files from _scss into both _site/css (for live injecting)
//  and site (for future jekyll builds)
gulp.task('compass', function () {
    gulp.src('_scss/**/*.scss')
        .pipe(plumber())    
        .pipe(compass({
            config_file: 'config.rb',
            css: '_site/css',
            sass: '_scss'
        }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({
            stream:true
        }))
        .pipe(gulp.dest('css'));
});

//  Watch scss files for changes & recompile
//  Watch html/md files, run jekyll & reload BrowserSync
gulp.task('watch', function () {
    gulp.watch('_scss/**/*.scss', ['compass']);
    gulp.watch(['*.html', 'js/*.js', '_layouts/*.html', '_posts/*', '_includes/*.html'], ['jekyll-rebuild']);
});

//  Default task, running just `gulp` will compile the compass,
//  compile the jekyll site, launch BrowserSync & watch files.
gulp.task('default', ['browser-sync', 'watch']);
