import React,{Component,PureComponent} from "react";
// 性能

// PureComponent 提供了一个具有浅比较的 shouldComponentUpdate 方法,其他和 Component 完全一直
// 如果使用PureComponent ，state 的中的谋个值是引用类型，一定记得在更新时，更新引用地址(返回一个新对象)
class App extends PureComponent {
    state={
        data:{
            name: "kkb"
        }
    }
    render(){
        console.log("更新了");
        return <div>
            <h1>{this.state.data.name}</h1>
            <button onClick={()=>{
                // let {data} = this.state;
                // data.name  = "kkb3";
                // this.setState({
                //     data
                // })
                let {data} = this.state;
                data.name  = "kkb3";
                this.setState({
                    data:{...data}
                })
                
            }}>修改名字</button>
        </div>
    }
}
export default App;