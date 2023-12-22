const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const useref = require('gulp-useref');
const gulpLoadPlugins = require('gulp-load-plugins');
const nunjacks = require('gulp-nunjucks-render');
const gcmq = require('gulp-group-css-media-queries');
const runSequence = require('run-sequence');
const del = require('del');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Compile sass into CSS & auto-inject into browsers
gulp.task('styles', function () {
    const AUTOPREFIXER_BROWSERS = [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ];
    return gulp.src([
        'src/stylesheets/**/*.scss',
        'src/stylesheets/**/*.less'
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe($.sourcemaps.init())
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gcmq())
        .pipe(gulp.dest('dist/css'))
        .pipe($.sourcemaps.write('./'))
        .pipe(browserSync.stream());
});

// Process JS files and return the stream.
gulp.task('scripts', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe($.concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

// Lint JavaScript
gulp.task('lint', function () {
    gulp.src(['src/scripts/**/*.js', '!node_modules/**'])
        .pipe($.eslint())
        .pipe($.eslint.format())
});

// Html parse
gulp.task('html', function () {
    return gulp.src(['src/*.html', '!src/basic.html'])
        .pipe(nunjacks({
            path: ['src']
        }))
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

// Copy all files at the root level (src)
gulp.task('copy', function () {
    gulp.src([
        'src/*fonts/**/*',
        'src/*images/**/*',
        'src/manifest.json',
        'src/manifest.webapp',
        'src/*less/**/*'
    ], {dot: true}).pipe(gulp.dest('dist'))
});

// Clean output directory
gulp.task('clean', function () {
    return del(['dist/*'], {dot: true});
});

// Static Server + watching scss/js/html files
gulp.task('serve', ['styles', 'scripts', 'html', 'copy'], function () {
    browserSync({
        notify: false,
        open: false,
        logPrefix: 'Gulp',
        server: ['dist'],
        port: 4200
    });
    gulp.watch('src/**/*.scss', ['styles']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('src/**/*.html', ['html', reload]);
    gulp.watch(['src/images/**/*'], ['copy', reload]);
    gulp.watch(['src/fonts/**/*'], ['copy', reload]);
});

gulp.task('build', ['clean'], function (cb) {
    runSequence('styles', 'scripts', 'html', 'copy', cb);
});

gulp.task('default', ['clean'], function (cb) {
    runSequence('serve', cb);
});