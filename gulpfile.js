const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
// const minify_css = require("gulp-minify-css");
///是gulp所完成的事情（任务）

//定义一个复制文件的任务
// gulp.task("copyallfile", async ()=>{
    //把当前目录下的所有html文件拷贝至目录：D:\\phpStudy\\WWW\\web1908\\taobao
    // gulp.src("*/**/*")
    // .pipe(gulp.dest("D:\\phpStudy\\WWW\\web1908\\taobao"));
// });

// gulp.task("watchall",async ()=>{
    //定义一个监听器，监听文件是否有改变，如果有改变，则自动拷贝。
    // gulp.watch("*.html",async ()=>{
        //把当前目录下的所有html文件拷贝至目录：D:\\phpStudy\\WWW\\web1908\\taobao
//         gulp.src("*.html")
//         .pipe(gulp.dest("D:\\phpStudy\\WWW\\web1908\\taobao"));
//     });
  
// });
gulp.task("watchall",async ()=>{
    gulp.watch("*.html", async ()=>{
        //把当前目录下的所有html文件拷贝至目录：D:\phpStudy\WWW\myfile\swatch1908
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\web1908\\taobao"));
    });
    gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        // .pipe(uglify()
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\web1908\\taobao\\js"));
    })
    gulp.watch("*.scss", async ()=>{
        gulp.src("*.scss")
        .pipe(sass())
        // .pipe(minify_css())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\web1908\\taobao\\css"));
    })
});