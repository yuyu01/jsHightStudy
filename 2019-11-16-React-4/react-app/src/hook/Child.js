import React from 'react';

function Child(props){
  // console.log(props);
  // const {name,setName,age,setAge} = props;
  const {state,setState} = props; 
  const {name,age} = state;
  console.log(state);
  return (
      <div>
          <p>name:{name}<br/>
            <input 
                type="text" 
                value={name}
                onChange={({target})=>{
                    // setName(target.value);
                    setState({
                        ...state,
                        name: target.value
                    });
                }}
            />
          </p>
          <p>age:{age}<br/>
            <input 
                type="text"
                value={age}
                onChange={({target})=>{
                    // setAge(target.value);
                    setState({
                        ...state,
                        age: target.value
                    });
                }}
            />
          </p>
      </div>
  );
}

export default Child;