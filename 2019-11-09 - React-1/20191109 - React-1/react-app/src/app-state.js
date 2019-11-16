import React from "react";
// state 状态
// setState()
/*
    setState() 修改 组件的 state
        - setState({
            要修改的state
        })
        - setState(function(){
            return {
                 要修改的state
            }
        })

   state:     
    1. 调用 setState 之后会修改 组件的 state，并且会重新对组件的内容重新渲染 
    2. 同一地方多次调用 setState react 会对 操作进行合并 只渲染一次   
*/
/* 
    react 添加事件 主要两个问题
        1. 事件名称注意大小写
        2. 事件处理函数的this 默认是undefined 
        3. 如果要获取当前元素可以获取 e.target
*/

// class App extends React.Component {
//     constructor(props){
//         super(props);
//         // this.state = {
//         //     name: "kkb",
//         //     age: 8
//         // }
//         this.setAge = this.setAge.bind(this);
//     }
//     state = {
//         name: "kkb",
//         age: 8
//     }
//     setAge(){
//         console.log(this);
//     }
//     render(){
//        let {data} = this.props;
//        let {name,age} = this.state;
//        return  (<div>
//             {data.map(item=><p key={item.id}>这是第{item.name}项</p>)}
//             <div>
//                 姓名：{name}<br/>
//                 年龄: {age}
//             </div>
//             <button
//                 onClick={this.setAge}
//             >又大了一岁</button>
//        </div>)
//     }
// }
class App extends React.Component {
    state = {
        name: "kkb",
        age: 8
    }
    // setAge=()=>{
    //     console.log(this);
    // }
    render(){
      console.log(this.state);
       let {data} = this.props;
       let {name,age} = this.state;
       return  (<div>
            {data.map(item=><p key={item.id}>这是第{item.name}项</p>)}
            <div>
                姓名：{name}<br/>
                年龄: {age}
            </div>
            <button
                onClick={(e)=>{
                    //console.log(this,e.target);
                    // this.setState({
                    //     age: ++age
                    // });
                    // this.setState({
                    //     name: "开课吧"
                    // });
                    this.setState(function(){
                        return {
                            age: ++age
                        }
                    });
                }}
            >又大了一岁</button>
       </div>)
    }
}
export default App;