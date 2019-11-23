import React,{useState} from 'react';
import {NavLink,Route,Switch} from "react-router-dom";
import router from "./router/router";
import "./index.css";
function App(props) {
  const [user,setUser] = useState("");
  return (
      <div className="App">
          <nav className="nav">
              {
                router.filter(item=>item.isNav).map((item,index)=>{
                    return (<NavLink 
                              to={item.isDynamic?item.to:item.path} 
                              key={index}
                              exact={item.exact}
                              activeClassName="hover"
                              activeStyle={{
                                lineHeight: "30px"
                              }}
                            >{item.title}</NavLink>)
                })
              }
              <div>
              {user?<span>
                  用户名:{user + "  "}
                  <button onClick={()=>{
                    setUser("")
                  }}>退出</button>
              </span>:""}
              </div>
          </nav>
          <div>
            <Switch>
              {router.map((item,index)=>{
                return <Route key={index} path={item.path} exact={item.exact} render={(props)=>{
                    props = {user,setUser,...props}
                    return item.render(props);
                }} />
              })}
            </Switch>
          </div>
      </div>
  );
}

export default App;
