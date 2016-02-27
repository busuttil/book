var gulp = require('gulp'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    jscs = require('gulp-jscs'),
    path = require('path')
;

var directories = {
    src: __dirname + '/src',
    public: __dirname + '/public',
    modules: __dirname + '/node_modules'
};

var files = {
    vendor: [
        directories.modules + '/jquery/dist/jquery.min.js',
        directories.modules + '/bootstrap/js/modal.js',
        directories.modules + '/bootstrap/js/dropdown.js'
    ],

    js: [
        directories.src + '/js/**'
    ],

    html: [
        directories.src + '/index.html'
    ],

    less: [
        directories.src + '/less/main.less'
    ],

    fonts: directories.modules + '/font-awesome-animation/vendor/font-awesome/fonts/*',

    images: directories.src + '/images/**'
};

gulp.task('default', ['vendor', 'js', 'html', 'less', 'fonts', 'images']);
gulp.task('watch', ['build', 'watch']);

gulp.task('vendor', function() {
    var src = gulp.src(files.vendor)
        .pipe(concat('vendor.js'));

    src.pipe(gulp.dest(directories.public + '/js'));
});

gulp.task('js', function() {
    var src = gulp.src(files.js)
        .pipe(concat('book.js'));

    src.pipe(gulp.dest(directories.public + '/js'));
});

gulp.task('html', function() {
    gulp.src(files.html)
        .pipe(gulp.dest(directories.public));
});

gulp.task('less', function() {
    gulp.src(files.less)
        .pipe(less())
        .pipe(gulp.dest(directories.public + '/css'));
});

gulp.task('fonts', function() {
    gulp.src(files.fonts)
        .pipe(gulp.dest(directories.public + '/fonts'));
});

gulp.task('images', function() {
    gulp.src(files.images)
        .pipe(gulp.dest(directories.public + '/images'));
});

gulp.task('watch', function() {
    gulp.watch(files.less.concat(directories.src + '/less/**/*.less'), ['less']);
    gulp.watch(files.html, ['html']);

    gulp.watch(__dirname + '/gulpfile.js', ['build']);
});

gulp.task('test:cs', function() {
    return gulp.src(files.js)
        .pipe(jscs({fix: true}))
});

