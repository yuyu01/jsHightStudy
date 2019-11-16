import React from "react";

// 组件的首字母一定大写
// 标签一定小写
// 在 16.7 之前，函数组件没有状态，所以只用于纯渲染
function App(props){
    console.log(props);
    return <h1>hello React</h1>
}

/*
    props 从 父级传递的信息
*/

// class App extends React.Component {
//     render(){
//        let {data} = this.props;
//        console.log(this.props);
//        return  (<div>
//             {data.map(item=><p key={item.id}>这是第{item.name}项</p>)}
//        </div>)
//     }
// }

export default App;