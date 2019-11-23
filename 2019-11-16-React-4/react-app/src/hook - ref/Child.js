import React,{useState,useEffect,useRef} from 'react';
function Child(props){
  const {name,setName} = props;
  const [age,setAge] = useState("8");
  const div = useRef(null);
  const prevVal = useRef(true);
  /*
    useRef(defaultVal);
    1. 获取真实的DOM
    2. 记录组件更新之前的值
  */
  // useEffect(()=>{
  //   console.log(div.current);
  //   console.log(prevVal.current,name,age);
  //   prevVal.current = {
  //     name,age
  //   }
  // });
  useEffect(()=>{
    if(!prevVal.current){
      console.log("更新");
    } else {
      console.log("挂载");
      prevVal.current = false;
    }
  });
  return (
      <div ref={div}>
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