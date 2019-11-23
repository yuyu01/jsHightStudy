import React,{Component} from "react";
class Child extends Component {
    state = {
        age: 8
    }
    static getDerivedStateFromProps(props, state){
        console.log(1,"即将挂载","挂载阶段或即将更新");
        return true;
    }
    shouldComponentUpdate(){
        console.log(2,"即将挂载","自身状态发生变化");
        return true;
    }
    // componentWillUpdate() {
    //     console.log(3,"即将挂载","即将更新");
    // }
    getSnapshotBeforeUpdate(){
        console.log(5,"组件更新完毕即将重新渲染DOM");
        let wrap = document.querySelector("#wrap");
        return wrap.innerHTML;
    }
    componentDidUpdate(prevPorps,prevState,prevInfo){
        console.log(6,"组件更新完成");
        console.log(prevInfo);
    }
    render(){
        //console.log(3,"即将把内容渲染进DOM");
        console.log(3,"开始把内容渲染进DOM");
        let {name,setName} = this.props;
        let {age} = this.state;
        return (<div id="wrap">
            <p>
                name: <input type="text" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }} />
            </p>   
            <p>
                age: <input type="number" value={age} onChange={(e)=>{
                    this.setState({
                        age: e.target.value
                    });
                }} />
            </p> 
            <p>
                name:{name}<br/>
                age: {age} 
            </p>
        </div>)
    }
}
class App extends Component {
    state = {
        name: "kkb"
    }
    setName = (name)=>{
        this.setState({
            name
        });
    }
    render(){
        let {name} = this.state;
        return <div>
            <Child name={name} setName={this.setName}  />
        </div>
    }
}
export default App;