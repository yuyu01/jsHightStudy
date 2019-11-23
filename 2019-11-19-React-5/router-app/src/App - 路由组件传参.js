import React,{useState} from 'react';
import {Link,Route} from "react-router-dom";
import Index from "./view/index";
import About from "./view/about";
import AboutDetails from "./view/join_detail"
import Join from "./view/joinus";
/*
  route 的 render 属性:
    1. 如果我们想给路由里的组件进行传参那就需要调用组件的 render 方法
    2. render 方法接收的参数是一个函数，在函数必须有一个返回值，返回值是要我们要渲染的对应组件
*/
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
          {/* 加了 exact 之后，就 必须 url 的 path === route 才会匹配 */}
            <Route path="/" exact component={Index} />
            <Route path="/about" exact render={(props)=>{
                return <About {...props} user={user} />
            }} />
            <Route path="/about/details" component={AboutDetails} />
            <Route path="/join" component={Join} />
          </div>
      </div>
  );
}

export default App;
