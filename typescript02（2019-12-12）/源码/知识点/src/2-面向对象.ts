
// // // class User {

// // //     username: string;
// // //     age: number;

// // //     // 构造函数不能有返回值，且不能给构造函数标注类型
// // //     constructor(username: string, age: number) {
// // //         // 在ts中的成员属性不能通过构造函数的初始化类定义，而是需要单独的定义的
// // //         this.username = username;
// // //         this.age = age;

// // //         // 不允许
// // //         // return 1;
// // //     }

// // //     postArticle(title: string, content: string): void {
// // //         console.log(`${this.username} 发表了一篇文章： ${title}`)
// // //     }

// // // }







// // class User {

// //     // username: string;
// //     // age: number;

// //     constructor(
// //         protected username: string, 
// //         private age: number,
// //         private phone: string
// //     ) {
// //         // this.username = username;
// //         // this.age = age;
// //     }

// //     postArticle(title: string, content: string): void {
// //         console.log(`${this.username} 发表了一篇文章： ${title}`)
// //         this.age;
// //     }

// //     // getPhone() {
// //     //     return '*******' + this.phone.substring(8, 12);
// //     // }

// //     get _phone() {
// //         return '*******' + this.phone.substring(8, 12);
// //     }

// // }

// // class VIP extends User {

// //     constructor(username: string, age: number, phone: string) {
// //         // this
// //         super(username, age, phone);
// //         // this
// //         // this.age;
// //     }

// //     method1() {
// //         this.username;
// //     }

// // }



// // let user1 = new User('mt', 30, '11000000000');
// // // user1.username;
// // // user1.age;
// // // user1.getPhone();
// // user1._phone;



// /**
//  * let 苹果汁 = new 榨汁机(苹果)
//  *      苹果汁.浓度
//  *      苹果汁.颜色
//  *      苹果汁.饮用()
//  * 榨汁机.品牌
//  * 榨汁机.重量
//  */
// class User {

//     static genders = ['男', '女', '未知'];

//     constructor(
//         public username: string
//     ) {

//     }

//     eat() {}

//     static method() {
//         // 如果一个类的方法中没有依赖 this，那么这个方法其实也是类的
//         User.genders;
//     }

// }

// let user1 = new User('mt');
// user1.username;
// user1.eat();
// User.genders;
// User.method();




// 类类型   对象类型
class User {

    static genders = ['男', '女', '未知'];

    constructor(
        public username: string
    ) {

    }

    eat(): void {}

    static method():string { return ''}

}

// 当一个类被创建的时候，产生了两种不同的类型：一个是类（构造函数）的类型，另外一个是类实例化出来的对象的类型
interface UserObject {
    username: string;
    eat(): void;
}
interface UserClass {
    new(usernmae: string): UserObject,
    genders: string[],
    method(): string;
}

let user1 = new User('mt');


function fn(arg: UserClass) {
    return new arg('');
}

fn(User);


// let fn: UserClass = function(username: string) {
//     return new User(username);
// }

// let user2 = new fn('zmouse');

