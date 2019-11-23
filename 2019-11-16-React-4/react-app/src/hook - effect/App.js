import React,{useState} from 'react';
import Child from './Child';

// 自定义hook
function useToggle(init){
    const [off,setOff] = useState(init);
    return [off,()=>{
      setOff(!off);
    }];
}

function App() {
  const [name,setName] = useState("kkb");
  const [show,changeShow] = useToggle(true);
  return (
    <div className="App">
        {show?<Child 
            name = {name}
            setName = {setName}
        />:""}
       
        <button onClick={()=>{
          changeShow();
        }}>{show?"卸载":"加载"}</button>
    </div>
  );
}
export default App;
