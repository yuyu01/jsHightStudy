import React,{useState,useEffect} from 'react';
/*
    useEffect 副作用
    useEffect(cb)
    useEffect(cb[,[依赖1,依赖2]]);

    useEffect相当于：componentDidMount、componentDidUpdate 和 componentWillUnmount 综合体
*/
function Child(props){
  const {name,setName} = props;
  const [age,setAge] = useState("8");
//   useEffect(()=>{
//       console.log("组件更新了");
//   });
  useEffect(()=>{
      console.log("age变化导致更新了");
  },[age]);
  useEffect(()=>{
    console.log("name变化导致更新了");
  },[name]);
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