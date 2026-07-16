const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const useref = require('gulp-useref');
const gulpLoadPlugins = require('gulp-load-plugins');
const nunjacks = require('gulp-nunjucks-render');
const fs = require('fs');

// PostCSS & plugins
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Automatically verify and create missing asset folders to prevent Gulp crashing
function ensureDirsExist(cb) {
    const requiredDirs = ['src/fonts', 'src/images'];
    requiredDirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`Created missing directory: ${dir}`);
        }
    });
    cb();
}

// Compile sass into CSS & auto-inject into browsers
function styles() {
    return gulp.src([
        'src/stylesheets/**/*.scss',
        'src/stylesheets/**/*.less'
    ])
        .pipe($.sourcemaps.init())
        .pipe(sass.sync({
            quietDeps: true,
            silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions', 'if-function']
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer(),
            mqpacker({ sort: true }) 
        ]))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

// Process JS files and return the stream
function scripts() {
    return gulp.src('src/scripts/**/*.js')
        .pipe($.concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

// Lint JavaScript
function lint() {
    return gulp.src(['src/scripts/**/*.js', '!node_modules/**'])
        .pipe($.eslintNew ? $.eslintNew() : $.eslint())
        .pipe($.eslintNew ? $.eslintNew.format() : $.eslint.format());
}

// Html parse
function html() {
    return gulp.src(['src/*.html', '!src/basic.html'])
        .pipe(nunjacks({
            path: ['src']
        }))
        .pipe(useref())
        .pipe(gulp.dest('dist'));
}

// Copy all files at the root level (src)
// FIXED: Removed the wildcard asterisks (*) so your images and fonts copy correctly
function copy() {
    return gulp.src([
        'src/fonts/**/*',
        'src/images/**/*',
        'src/manifest.json',
        'src/manifest.webapp',
        'src/less/**/*'
    ], { dot: true, allowEmpty: true })
        .pipe(gulp.dest('dist'));
}

// Clean output directory using native Node.js
function clean(cb) {
    fs.rmSync('dist', { recursive: true, force: true });
    cb();
}

// Static Server + watching files
function watchFiles() {
    browserSync.init({
        notify: false,
        open: false,
        logPrefix: 'Gulp',
        server: ['dist'],
        port: 4200
    });

    gulp.watch('src/**/*.scss', styles);
    gulp.watch('src/scripts/**/*.js', scripts);
    gulp.watch('src/**/*.html', gulp.series(html, (cb) => { reload(); cb(); }));
    gulp.watch('src/images/**/*', gulp.series(copy, (cb) => { reload(); cb(); }));
    gulp.watch('src/fonts/**/*', gulp.series(copy, (cb) => { reload(); cb(); }));
}

// Define complex tasks (Ensuring directories exist first)
const serve = gulp.series(ensureDirsExist, clean, gulp.parallel(styles, scripts, html, copy), watchFiles);
const build = gulp.series(ensureDirsExist, clean, gulp.parallel(styles, scripts, html, copy));

exports.styles = styles;
exports.scripts = scripts;
exports.lint = lint;
exports.html = html;
exports.copy = copy;
exports.clean = clean;

// Named public tasks
exports.serve = serve;
exports.build = build;
exports.default = serve;
