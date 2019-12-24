// class User {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     username: string;
//     age: number;
//     // 构造函数不能有返回值，且不能给构造函数标注类型
//     constructor(username: string, age: number) {
//         // 在ts中的成员属性不能通过构造函数的初始化类定义，而是需要单独的定义的
//         this.username = username;
//         this.age = age;
//         // 不允许
//         // return 1;
//     }
//     postArticle(title: string, content: string): void {
//         console.log(`${this.username} 发表了一篇文章： ${title}`)
//     }
// }
var User = /** @class */ (function () {
    // username: string;
    // age: number;
    function User(username, age) {
        this.username = username;
        this.age = age;
        // this.username = username;
        // this.age = age;
    }
    User.prototype.postArticle = function (title, content) {
        console.log(this.username + " \u53D1\u8868\u4E86\u4E00\u7BC7\u6587\u7AE0\uFF1A " + title);
    };
    return User;
}());
var VIP = /** @class */ (function (_super) {
    __extends(VIP, _super);
    function VIP(username, age) {
        return _super.call(this, username, age) || this;
    }
    return VIP;
}(User));
var user1 = new User('mt', 30);
