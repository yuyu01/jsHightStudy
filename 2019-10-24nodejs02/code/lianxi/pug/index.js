const Koa = require("koa")
const Router = require("koa-router")
const views = require("koa-views")

let app = new Koa()
let router = new Router()

app.use(views(__dirname) + "/views",{
    map:{
        html:"pug"
    }
});

router.get("/",async ctx=>{
    let users = [{name:"张三",age:12,height:"140cm"},{name:"李四",age:13,height:"150cm"}];
    await ctx.render("index.pug",{
        data:"数据",
        users
    });
})
app.use(router.routes());
app.listen(3000);