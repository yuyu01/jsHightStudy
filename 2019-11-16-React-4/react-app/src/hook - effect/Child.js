import React,{useState,useEffect} from 'react';
/*
    useEffect 副作用
    useEffect(cb)
    useEffect(cb[,[依赖1,依赖2]]);

    useEffect相当于：componentDidMount、componentDidUpdate 和 componentWillUnmount 综合体

    只希望在组件挂载后执行某些事情(componentDidMount)
*/
function Child(props){
  const {name,setName} = props;
  const [age,setAge] = useState("8");
  useEffect(()=>{
    console.log("组件挂载完成之后");
    return ()=>{
        console.log("组件即将卸载时执行");
    }  
  },[]);
  useEffect(()=>{
    console.log("组件挂载及组件更新完成之后");  
  });
  return (
      <div>
          <p>name:{name}<br/>
            <input 
                type="text" 
                value={name}
                onChange={({target})=>{
                    setName(target.value);
                }}
            />
          </p>
          <p>age:{age}<br/>
            <input 
                type="text"
                value={age}
                onChange={({target})=>{
                    setAge(target.value);
                }}
            />
          </p>
      </div>
  );
}

export default Child;