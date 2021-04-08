//
// Gulpfile
//
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  changed = require('gulp-changed'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  del = require('del'),
  concat = require('gulp-concat'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglifyjs'),
  cache = require('gulp-cache'),
  imagemin = require('gulp-imagemin'),
  imageminJpegRecompress = require('imagemin-jpeg-recompress'),
  pngquant = require('imagemin-pngquant'),
  browserSync = require('browser-sync').create();
panini = require('panini');


//
// Gulp plumber error handler - displays if any error occurs during the process on your command
//
function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}


//
// SASS - Compile SASS files into CSS
//
gulp.task('sass', function () {
  // Theme
  gulp.src('./src/styles/**/*.scss')
    .pipe(changed('./build/assets/css/'))
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(autoprefixer([
      "last 1 major version",
      ">= 1%",
      "Chrome >= 45",
      "Firefox >= 38",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"], { cascade: true }))
    .pipe(gulp.dest('./build/assets/css/'))
    .pipe(browserSync.stream());
});



gulp.task('compile-html', function () {
  gulp.src('src/pages/**/*.html')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/components/',
      helpers: 'src/html/',
      data: 'src/data/',
      pageLayouts: {
        'stamparija': 'stamparija',
        'stamparija\\proizvodi': 'proizvodi',
        'stamparija\\proizvodi\\flajeri': 'proizvodi',
        'stamparija\\proizvodi\\vizit-karte': 'proizvodi',
        'stamparija\\usluge': 'stamparija',
        'fotografija': 'fotografija',
        'graficki-dizajn': 'graficki-dizajn',
        'web-razvoj': 'web-razvoj',
        // english
        'en\\printing': 'printing',
        'en\\printing\\products': 'products',
        'en\\printing\\products\\flyers': 'products',
        'en\\printing\\products\\business-cards': 'products',
        'en\\printing\\career-opportunities': 'printing',
        'en\\printing\\services': 'printing',
        'en\\photography': 'photography',
        'en\\graphic-design': 'graphic-design',
        'en\\web-development': 'web-development',
        'en': 'default-en'
      }
    }))
    .pipe(gulp.dest('build'));
});


gulp.task('resetPages', (done) => {
  panini.refresh();
  done();
  console.log('Clearing panini cache');
});


//
// BrowserSync (live reload) - keeps multiple browsers & devices in sync when building websites
//
//
// gulp.task('serve', function () {
//   browserSync.init({
//     files: "./*.html",
//     startPath: "./build/",
//     server: {
//       baseDir: "./build/",
//       routes: {},
//       middleware: function (req, res, next) {
//         if (/\.json|\.txt|\.html/.test(req.url) && req.method.toUpperCase() == 'POST') {
//           console.log('[POST => GET] : ' + req.url);
//           req.method = 'GET';
//         }
//         next();
//       }
//     }
//   })
// });


//
// Gulp Watch and Tasks
//
//
gulp.task('watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass']);
  gulp.watch(['src/**/*.html'], ['resetPages', 'compile-html']);
  gulp.watch(['src/en/**/*.html'], ['resetPages', 'compile-html']);

});



//
// CSS minifier - merges and minifies the below given list of Front libraries into one theme.min.css
//
gulp.task('minCSS', function () {
  return gulp.src([
    './assets/css/theme.css',
  ])
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build/assets/css/'));
});


//
// Copy Vendors - a utility to copy client-side dependencies into a folder
//
gulp.task('copyVendors', function () {
  gulp.src([
    './node_modules/*animate.css/**/*',
    './node_modules/*bootstrap-select/**/*',
    './node_modules/*chartist/**/*',
    './node_modules/*custombox/**/*',
    './node_modules/*clipboard/**/*',
    './node_modules/*datatables/**/*',
    './node_modules/*flag-icon-css/**/*',
    './node_modules/*flatpickr/**/*',
    './node_modules/*gmaps/**/*',
    './node_modules/*instafeed.js/**/*',
    './node_modules/*ion-rangeslider/**/*',
    './node_modules/*jquery/**/*',
    './node_modules/*jquery-migrate/**/*',
    './node_modules/*jquery-validation/**/*',
    './node_modules/*popper.js/**/*',
    './node_modules/*summernote/**/*',
    './node_modules/*svg-injector/**/*',
    './node_modules/*typed.js/**/*',
    './node_modules/*animejs/**/*',
  ])
    .pipe(gulp.dest('./build/assets/vendor/'))
});

gulp.task('default', ['watch', 'sass', 'compile-html']);
// gulp.task('default', ['copyVendors', 'minCSS', 'compile-html']);
