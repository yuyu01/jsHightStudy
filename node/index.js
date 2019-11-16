// console.log("我是index.js")
// // require("./Ma.js")
// require("./home")
const http = require("http");
const url = require("url")
const fs = require("fs")
const mime = require("./mime.json")
const path = require("path")


const server = http.createServer((req,res)=>{
    // console.log(req.url)
    // console.log(mime)
    let urlObj = url.parse(req.url)
    // console.log(urlObj)


    res.setHeader("content-type","text/html;charset=utf-8")
    // res.writeHead(300,{"content-type":"text/html;charset=utf-8"})
    if(urlObj.pathname === "/" || urlObj.pathname === "/index"){
        //通过文件读取
        // let indexData = fs.readFileSync("./view/index.html")
        //  res.write(indexData)
        // console.log(indexData)
        //通过流
        let indexData = fs.createReadStream("./view/index.html")
        indexData.pipe(res)
       
        // res.write("主页")
    }
    else if(urlObj.pathname=== "/product"){
        let productData = fs.readFileSync("./view/product.html")
        res.write(productData)
        // let profuctData = fs.createReadStream("./view/product.html")
        // profuctData.pipe(res)
    }
    else{
        if(urlObj.pathname !== "/favicon.ico"){
            console.log("url",req.url)
            let ext = path.extname(urlObj.pathname)
            console.log("pathname",urlObj.pathname)
            console.log("ext",ext) 
            console.log("aa",mime[ext])
            res.setHeader("content-type",mime[ext])
            let data = fs.createReadStream("./view" + urlObj.pathname)
            data.pipe(res)
        }
        
    }
    // res.end();
})
server.listen(4000);