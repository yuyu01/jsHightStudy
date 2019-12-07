// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import {createStore} from "redux";

/*
    createStore(reducer)

reducer: 纯函数

1. 相同的输入永远返回相同的输出
2. 不修改函数的输入值
3. 不依赖外部环境状态
4. 无任何副作用
*/


function reducer(state={
    nub:1,
    name: "kkb"
},action){
    switch(action.type){
        case "EDIT":
            return {
                ...state,
                nub: state.nub + 1
            }
    }
    return state;
}

let store = createStore(reducer);
// console.log(store);
store.subscribe(()=>{
    console.log("发生修改了",store.getState());
});
setInterval(()=>{
    store.dispatch({
        type:"EDIT"
    });// 默认情况下 dispatch 是一个同步操作
    // console.log(store.getState());
},1000);

/*
- getState() // 获取当前 store 存储 state
- dispatch(action) // 修改 state
- subscribe(listener) // 监听 state 发生修改
- replaceReducer(nextReducer) // 替换掉原来的 reducer
*/
