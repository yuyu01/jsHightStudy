/**
 * target: 是传入的对象
 * key: 是对象下面的其中一个key
 * 调用该函数返回target[key]
 */
function getVal<T>(target: T, key: keyof T) {
    return target[key];
}

let obj1 = {
    x: 1
};
let obj2 = {
    username: 'mt',
    age: 30
}

type O1 = typeof obj1;
type O2 = typeof obj2;

getVal<O1>(obj1, 'x');