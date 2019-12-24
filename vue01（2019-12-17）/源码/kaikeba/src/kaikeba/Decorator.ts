import 'reflect-metadata';

export function Get(url: string) {
    return function(
        target: any,
        key: string,
        descriptor: PropertyDescriptor
    ) {

        /**
         * target
         *      new 以后的实例对象
         */

        // console.log(target, key, descriptor);
        /**
         * Get 装饰器并不是立即绑定路由
         * 它的作用只是用来收集要注册的信息的
         */
        // target.routers = Array.isArray(target.routers) ? target.routers : [];
        //
        // target.routers.push({
        //     method: 'get',
        //     url,
        //     key
        // });



        // Reflect.defineMetadata('routers', [], target);
        let routers = Reflect.getMetadata('routers', target);
        // console.log(routers);

        // routers = routers || [];
        routers = Array.isArray(routers) ? routers : [];

        routers.push({
            method: 'get',
            url,
            key
        });

        Reflect.defineMetadata('routers', routers, target);

    }
}

export function Controller(prefix: string) {
    return function(
        target: any
    ) {
        Reflect.defineMetadata('prefix', prefix, target);
    }
}