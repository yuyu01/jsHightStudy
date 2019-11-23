import React,{useState} from 'react';
import {Link,Route,Switch} from "react-router-dom";
import Index from "./view/index";
import About from "./view/about";
import AboutDetails from "./view/join_detail"
import Join from "./view/joinus";
import View404 from './view/404';
function App(props) {
  const [user,setUser] = useState("kkb");
  return (
      <div className="App">
          <nav>
            <Link to="/">首页</Link>
            <span> | </span>
            <Link to="/about">关于我们</Link>
            <span> | </span>
            <Link to="/about/details">关于我们详情</Link>
            <span> | </span>
            <Link to="/join">加入我们</Link>
            <span> | </span>
            <Link to="/login">登录</Link>
          </nav>
          <div>
          {/* 
            Switch： 包在 Switch  Route 会一项一项去匹配，匹配成功一项之后，就不在匹配其他内容
          */}
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/about" exact  component={About}/>
              <Route path="/about/details" component={AboutDetails} />
              <Route path="/join" component={Join} />
              <Route component={View404} />
            </Switch>
          </div>
      </div>
  );
}

export default App;
