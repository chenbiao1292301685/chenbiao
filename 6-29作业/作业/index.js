/**
 * Created by CurtainCB on 2017/6/29.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var url = req.url;
    switch (url) {
        case "/index1.html": // 处理 index.html的请求
            fs.readFile("4页面/index1.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })
            break;
        case "/index2.html": // 处理 log.html的请求

            fs.readFile("4页面/index2.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            });
            
            break;
        case "/index3.html": // 处理 img.html的请求
            fs.readFile("4页面/index3.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/css":
            fs.readFile("4页面/1.css","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/css;charset=utf8"})
                    //发送数据
                    res.end(data);
                }
            });
            break;
        case "/js":
            fs.readFile("4页面/2.js","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/js;charset=utf8"})
                    //发送数据
                    res.end(data);
                }
            });
            break;
        case "/jpg":
            fs.readFile("4页面/04.jpg",function (err,data){
                if(err){
                    res.end("读取图片失败");
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"image/jpeg;"});
                    //发送数据
                    res.end(data);
                }
            });
            break;
        default: //其他请求
            res.end("404")
    }
}).listen(3000);