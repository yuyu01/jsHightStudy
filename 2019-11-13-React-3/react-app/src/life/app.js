import React,{Component} from "react";
class Child extends Component {
    state = {
        age: 8
    }
    componentDidMount(){
        let box = document.querySelector("#box");
        console.log(box.innerHTML);
    }
    render(){
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
        name: "kkb",
        err: false
    }
    setName = (name)=>{
        this.setState({
            name
        });
    }
    static getDerivedStateFromError(err) {
        return {
            err: true
        }
    }
    componentDidCatch(err,errInfo){
        console.log(errInfo);
    }
    // componentDidCatch(err){
    //     console.log(err);
    //     if(err){
    //         this.setState({
    //             err: true
    //         })
    //     }
    // }
    render(){
        let {name,err} = this.state;
        return <div>
            {err?"子组件出错了": <Child name={name} setName={this.setName}  />}
        </div>
    }
}
export default App;