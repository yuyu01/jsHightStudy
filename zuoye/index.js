const Koa = require("koa")
const Router = require("koa-router")
const nunjucks = require("koa-nunjucks-2")
const Url = require("url")
const static = require("koa-static");
const mysql2 = require("mysql2");
const dataa = require("./data/data.json")
const connection = mysql2.createConnection({
    host: 'localhost',
    user:'root',
    password:'csj123',
    database:'js001'
});

let app = new Koa()
let router = new Router()
let parseUrl = url=>{
    let urlObj = Url.parse(url,true)
    return urlObj
}


app.use(nunjucks({
    ext:"html",
    path:__dirname +"/views",
    nunjucksConfig:{
        trimBlocks:true
    }
}));



router.get("/", async ctx =>{
    // let data = {newslist:{},pageArr:[1,2,3,4,5],prePage:1,nextPage:2}
    // ctx.render("index",data)
    ctx.redirect("/index")
})

router.get("/index", async ctx=>{
    console.log("index")
    let urlObj = parseUrl(ctx.request.url)
    let currentPage = parseInt(urlObj.query.page) || 1;
    console.log(currentPage)
    let perPage = 5;
    let startIdx = (currentPage-1) * perPage;
    console.log(startIdx,endIdx)
    let [newData] = await connection.promise().query(`SELECT * FROM news LIMIT ${startIdx},${perPage}`);

    newData = JSON.parse(JSON.stringify(newData))

    let [pageSum] = await connection.promise().query("SELECT count(1) from news")
    pageSum = Math.ceil(pageSum[0]["count(1)"]/perPage)
    let pageArr= [];
    for(let i = 1; i <= pageSum;i++){
        pageArr.push(i);
    }
    let prePage = currentPage <= 1?1:currentPage-1;
    nextPage = currentPage < pageSum?currentPage+1:currentPage
    await ctx.render("index",{newslist:newData,pageArr:pageArr,prePage:prePage,nextPage:nextPage})
})

router.get("/detail",async ctx=>{
    let urlObj = parseUrl(ctx.request.url)
    let id = urlObj.query.id || 1;
    // let itemDataa = JSON.parse(JSON.stringify(dataa)).filter(v=>v.id == id)[0]
    
    let [itemData] = await connection.promise().query(`SELECT * from news WHERE id=${id}`);
    itemData = JSON.parse(JSON.stringify(itemData))
    if(itemData){
        itemData = itemData[0]
    }
    await ctx.render("detail",{item:itemData})
})

app.use(router.routes())
app.on("error",err=>{
    console.log(err)
})
app.use(static(__dirname + "/static"));
app.listen(3000)