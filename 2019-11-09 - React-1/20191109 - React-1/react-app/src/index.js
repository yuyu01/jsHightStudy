import React from 'react';
import ReactDOM from 'react-dom';
import App from "./demo/app";
let arr = [
    {
        id: 0, //数据的id 数据的id应该是唯一切不变的
        name: "a"
    },{
        id: 1,
        name : "b",
    }];
/*
    列表渲染时一定记得 写 key 属性
    如果这个数组中的数据后期会被操作，一定记得 key 值不要用索引    
*/

/*
<p></p> 0
<p></p> 1 删除
<p></p> 2
<p></p> 3


<p></p> 0
<p></p> 1
<p></p> 2

*/

// ReactDOM.render(
//     <div>
//         {arr.map((item)=>{
//             return <p key={item.id}>这是第{item.name}项</p>
//         })}
//     </div>, 
//     document.getElementById('root')
// );


// 必须有,且只有一个顶层的包含元素
// ReactDOM.render(
//     <div>
//         <div>1</div>
//         <div>1</div>
//     </div>, 
//     document.getElementById('root')
// );
// class -- > className
// ReactDOM.render(
//     <div className="wrap">
//         <div>1</div>
//         <div>1</div>
//     </div>, 
//     document.getElementById('root')
// );

// style  注意 style 本身接收一个对象
// let str = "wrap";
// ReactDOM.render(
//     <div className={str}>
//         <div>1</div>
//         <div>1</div>
//     </div>, 
//     document.getElementById('root')
// );
// let sty = {
//     background:"red",
//     width: "100px",
//     height: "200px"
// };
// ReactDOM.render(
//     <div style={sty}>
//         <div>1</div>
//         <div>2</div>
//     </div>, 
//     document.getElementById('root')
// );
// ReactDOM.render(
//     <div style={{
//         background:"red",
//         width: "100px",
//         height: "200px"
//     }}>
//         <div>1</div>
//         <div>2</div>
//     </div>, 
//     document.getElementById('root')
// );
ReactDOM.render(
    <App data={arr} name="kkb" title="开课吧"/>, 
    document.getElementById('root')
);