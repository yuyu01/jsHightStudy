/**
 * 1. 独立作用域
 *      - 闭包
 *      - 怎么内部的私有数据暴露
 * 2. 加载依赖
 *      - 如何加载其它模块
 *
 *
 *  AMD
 *      前置依赖
 *      依赖需要前置声明和处理
 *  CMD/CommonJS
 *      后置依赖
 *      依赖（就近）后置
 */
define(['./fn'], function(fn) {
    let button = document.querySelector('button');

    // console.log(fn);

    button.onclick = fn;
});


//
// button.onclick = function() {
//     fn();
// };
//
// function fn1() {
//
// }

// console.log('index.js');