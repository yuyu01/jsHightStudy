import * as Koa from 'koa';
// import * as KoaRouter from 'koa-router';

import KaiKeBa from "./kaikeba";

const app = new Koa();


// const router = new KoaRouter();
//
// router.get('/', async ctx => {
//     ctx.body = 'kaikeba';
// });
//
// app.use( router.routes() );

// app.listen(7070);


new KaiKeBa({
    app,
    controllers: __dirname + '/controllers/**/*.ts',
    basePath: '/api'
});