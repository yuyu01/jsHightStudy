import React,{createRef} from 'react';
/*
  函数组件：本质就是一个函数
  接收一个参数，参数是父级传递过来的 props
  必须有一个返回值,返回值是该组件要输入的内容

  （16.8-）无状态组件: 函数组件
      - 没有状态及生命周期
      - 也没有 this
*/
function Child(props){
  // console.log(props);
  const {name} = props;
  let ref = createRef();
  // console.log(this); 函数组件没有this
  return <h1 ref={ref} onClick={()=>{
  }}>Hello {name}</h1>
}
function App() {
  return (
    <div className="App">
        <Child name="小明" />
    </div>
  );
}
export default App;
