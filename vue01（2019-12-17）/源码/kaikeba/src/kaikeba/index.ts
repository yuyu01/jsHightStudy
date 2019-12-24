/**
 * 帮助我们自动去查找指定目录的下ts文件类，并把通过 Get、Post 等装饰器装饰的方法或类注册到路由中
 */
import * as Koa from 'koa';
import * as glob from 'glob';
import * as KoaRouter from 'koa-router';
import 'reflect-metadata';

interface IOption {
    app: Koa,
    controllers: string,
    basePath: string
}

export default class KaiKeBa {

    router = new KoaRouter;

    constructor(
        public options: IOption
    ) {

        this.loadControllers();

    }

    loadControllers() {

        let files = glob.sync( this.options.controllers );

        // console.log(files);

        /**
         * 加载所有读取到 files 文件
         */
        files.forEach(file => {

            // 可以通过 require 方法来加载文件
            // 装饰器是在类被创建的时候就会执行
            let ControllerClass = require(file).default;

            // console.log( Reflect.getMetadata('isController', ControllerClass) );

            let prefix = Reflect.getMetadata('prefix', ControllerClass);
            if (prefix === undefined) {
                return;
            }

            // 当我们实例化controller类的时候，其实该类已经被各种装饰器装饰完成了
            let controller = new ControllerClass();

            /**
             * 自动分析类的特征
             *  - 需要注册到路由的方法有哪些？
             *  - 对应的请求方式是什么？
             *  - 对应的url又是什么？
             */
            // this.router.get('/', controller.main);
            // this.router.get('/list', controller.list);
            // console.log( controller.routers );

            /*
            * controller.routers = [
            *   {
            *       method: 'get',
            *       url: '/'
            *       key: main
            *   },
            *   {
            *       method: 'get',
            *       url: '/list',
            *       key: list
            *   }
            * ]
            * */
            // console.log( Reflect.getMetadata('routers', controller) )

            let routers = Reflect.getMetadata('routers', controller);

            routers.forEach( router => {
                this.router[router.method](
                    this.options.basePath + prefix + router.url,
                    controller[router.key]
                );
            } );


        });

        // 当所有的控制器注册到路由以后，把路由注册到app中
        this.options.app.use( this.router.routes() );

        // 启动app
        this.options.app.listen(7070);
    }

}