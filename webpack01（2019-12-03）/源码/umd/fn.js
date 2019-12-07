// if (browser) {
//     define(function() {
//         function fn1() {
//             console.log('fn1');
//         }
//
//         return fn1;
//     });
// } else {
//     function fn() {
//         // ...
//     }
//
//     module.exports.fn = fn;
// }




(function (root, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    }
    else if (typeof define === "function" && define.amd) {
        // AMD 模块环境下
        define(['jquery'], factory);
    }
}(this, function ($) { // $ 要导入的外部依赖模块
    $('div');
    // ...
    function b(){}
    function c(){}

    // 模块导出数据
    return {
        b: b,
        c: c
    }
}));



