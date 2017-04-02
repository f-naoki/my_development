var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    //scssディレクトリの指定
    gulp.src('./htdocs/resource/scss/*.scss')
    //コンパイル実行
    .pipe(sass({style : 'compressed'})) //出力形式の種類　#nested, compact, compressed, expanded.
    //出力先の指定
    .pipe(gulp.dest('./htdocs/common/css'));
});

var browserSync =require('browser-sync');

gulp.task('server', ['browser-sync']);


gulp.task('browser-sync', function() {
    browserSync({
        server: {
             baseDir: "./htdocs/"       //対象ディレクトリ
            ,index  : "index.html"      //インデックスファイル
        }
    });
});

//
//ブラウザリロード
//
gulp.task('bs-reload', function () {
    browserSync.reload();
});

//
//監視ファイル
//
gulp.task('server', ['browser-sync'], function () {
    gulp.watch("./htdocs/*.html",            ['bs-reload']);
    gulp.watch("./htdocs/commons/css/*.css", ['bs-reload']);
    gulp.watch("./htdocs/commons/js/*.js",   ['bs-reload']);
});
