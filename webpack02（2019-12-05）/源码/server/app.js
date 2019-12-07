const Koa = require('koa');
const KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

router.get('/getdata', async ctx => {
    // console.log('开课吧');
    ctx.body = '开课吧';
});

app.use(router.routes());

app.listen(7777);