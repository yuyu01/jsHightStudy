// // /**
// //  * 函数这种类型的数据，标注：
// //  *  - 参数的类型
// //  *  - 返回值的类型
// //  */
// // // function fn1(a: number, b: number): number {
// // //     return a + b;
// // // }

// // // let f1 = fn1(1, 2);

// // /**
// //  * type callback 是一个类型名称，在编译以后的代码中将会被删除
// //  * fn2 callback 形参是一个参数，变量
// //  */
// // // type callback = (a: number, b: number) => number;
// // // function fn2( callback: callback ) {

// // // }

// // // fn2( function(a, b) {
// // //     return a + b;
// // // } )

// // // 通过接口的形式来标注函数
// // interface IUser {
// //     username: string;
// //     age: number;
// //     // 如果在接口中定义一个函数，且这个函数有名称的话，则表示是一个对象中包含了一个方法，并非是用接口去单独的定义了一个函数
// //     eat(): void;
// // }

// // // type callback = (a: number, b: number) => number;
// // interface ICallBack {
// //     (a: number, b: number): number;
// // }

// // // let obj: IUser = {
// // //     username: 'zmouse',
// // //     age: 35,
// // //     eat() {}
// // // }
// // // function fn3(args: IUser) {

// // // }

// // // fn3(obj);

// // // function fn4( callback: ICallBack ) {

// // // }
// // // fn4( function(a, b) {
// // //     return a + b;
// // // } )




// // this
// // function fn5() {
// //     // 普通在声明的时候是无法去确定this的类型的
// //     this
// // }

// // fn5();
// // document.onclick = fn5;

// // interface IUser {
// //     username: string;
// //     age: number;
// //     eat(a: string): void;
// // }

// // let obj2:IUser = {
// //     username: 'zmouse',
// //     age: 35,
// //     eat(this: IUser, a) {  // this的标注是不占用实际参数的位置的
// //         console.log(this);
// //     }
// // }



// // function showOrHide(ele: HTMLElement, attr: 'display'|'opacity', value: 'block'|'none'|number) {
// // 	//
// // }


// // showOrHide(document.body, 'display', 'none');
// // showOrHide(document.body, 'opacity', 1);
// // // 有问题的：
// // showOrHide(document.body, 'opacity', 'block');


// // 当同名函数接受的参数类型或者参数的个数不一致的时候，那么这个时候，我们需要函数重载
// function showOrHide(ele: HTMLElement, attr: 'display', value: 'block'|'none');
// function showOrHide(ele: HTMLElement, attr: 'opacity', value: number);
// function showOrHide(ele: any, attr: any, value: any) {
//     if (attr === 'opacity') {
//         //....   
//     }
// }
// showOrHide(document.body, 'display', 'none');
// showOrHide(document.body, 'opacity', 1);
