import React from "react"

// function App(){
//   return <h1>hello world</h1>
// }

class App extends React.Component{
  state={
    name:"张三",
    age:10
  }
  render(){
    let {data} = this.props
    let {name ,age} = this.state
  
    return <div>
      <h1>hello world</h1>
      <div>
        姓名:{name}<br/>
        年龄:{age}
      </div>
      <button onClick={(e)=>{
        this.setState({
          age:++age
        })
        }}>点击一下大一岁</button>
    </div>
  }
}

export default App