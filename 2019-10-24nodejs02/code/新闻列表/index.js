const Koa = require("koa");
const Router = require("koa-router");
const nunjucks = require("koa-nunjucks-2")

let app = new Koa();
let router = new Router();

app.use(nunjucks({
    ext:"html",
    path:__dirname + "/views",
    nunjucksConfig:{
        trimBlocks:true 
    }
}));
router.get("/", async ctx=>{
    await ctx.render("index",{
        
    })
})

//作业 ：通过koa实现 新闻 列表、分页、详细页面；
