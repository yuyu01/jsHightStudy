import fn from './fn.js';
import fn2 from './fn2.js';

let button = document.querySelector('button');
button.onclick = fn;

// console.log('index');
//
// async function getData() {
//     // let rs = await fetch('http://localhost:7777/getData');
//     // console.log(rs);
//
//     // 如果我们发送的请求还是当前的这个服务器的域
//     let rs = await fetch('/api/getData');
//     console.log(rs);
//     let data = await rs.text();
//     console.log(data);
// }

// getData();

// console.log(module.hot);

if (module.hot) {//如果开启 HMR
    module.hot.accept('./fn.js', function() {
        console.log('fn.更新了')
        // 更新逻辑
        button.onclick = fn;
    })

    module.hot.accept('./fn2.js', function() {
        console.log('fn2.更新了')
        // 更新逻辑
        // box1.onclick = fn1;
    })
}