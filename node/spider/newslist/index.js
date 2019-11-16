
const http = require("http");
const url = require("url")
const fs = require("fs")
const mime = require("./data/mime.json")
const path = require("path")
const data = require("./data/data.json");
const cheerio = require("cheerio")


const server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html;charset=utf-8")

    let urlObj = url.parse(req.url,true)
    
    if(urlObj.pathname === "/" || urlObj.pathname === "/index"){
        let currentPage = parseInt(urlObj.query.page) || 1
        let prePage = 5
        let newData = JSON.parse(JSON.stringify(data)).splice((currentPage - 1) * prePage, prePage)
        let pageSum = Math.ceil(JSON.parse(JSON.stringify(data)).length / prePage);
        let str = "";
        newData.forEach(v=>{
            str += `<li class="news">
            <a href="javascript:;">
                <img src="${v.imgUrl}" alt="">
            </a>
            <div>
                <h3>
                    <a href="/detail?id=${v.id}">${v.title}</a>
                </h3>
                <div class="info">
                    <span class="tips"><span>${v.form}</span></span>
                    <!-- <span class="line"></span> -->
                    <span class="time">| &nbsp;&nbsp;${v.newTime}</span>
                </div>
            </div>
        </li>`;
        })
        let indexData = fs.readFileSync("./views/index.html");
        let $ = cheerio.load(indexData);
        $(".news-list").html(str)
        

        let pageHtml = `<a href="index?page=${currentPage <= 1?1:currentPage -1}" class="prev">⌜</a>`
        for( let i = 1; i<= pageSum;i++)
        {
            pageHtml += `<a href="index?page=${i}">${i}</a>`
        }
        pageHtml += `<a href="index?page=${currentPage >= pageSum?pageSum:currentPage + 1}" class="next">⌝</a>`
        $(".pagination").html(pageHtml)
        res.end($.html())
    }
    else if(urlObj.pathname === "/detail"){
        let id = urlObj.query.id || 1
        let detailInfo = JSON.parse(JSON.stringify(data)).filter(v=>v.id == id)[0]
        let indexData = fs.readFileSync("./views/detail.html")
        let $ = cheerio.load(indexData);
        let str = `<h1 class="title">${detailInfo.title}</h1>
        <div class="article-info">${detailInfo.form}时间：${detailInfo.newTime}</div>
        <p class= "content">${detailInfo.title}</p>`
        $(".text").html(str)
        res.end($.html())
    }
    else{
        if(urlObj.pathname !== "/favicon.ico"){
            console.log(urlObj)
            let ext = path.extname(urlObj.pathname)
            res.setHeader("content-type",mime[ext])
            let resData = fs.createReadStream("./views/css" + urlObj.pathname)
            resData.pipe(res)
        }
    }
})
server.listen(4000);