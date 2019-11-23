import React from 'react';
import {Redirect} from "react-router-dom";
import Index from "../view/index";
import About from "../view/about";
import Join from "../view/joinus";
import View404 from '../view/404';
import Login from '../view/login';
import Class from '../view/class';
let routeList = [
    {
      title: "首页",
      path: "/",
      exact: true,
      isNav: true,
      render:(props)=>{
        return <Index {...props} />
      } 
    },{
      title: "关于我们",
      path: "/about",
      isNav: true,
      exact: true,
      render:(props)=>{
        return <About {...props} />
      } 
    },{
      title: "加入我们",
      isNav: true,
      path: "/join",
      exact: false,
      render:(props)=>{
        return <Join {...props} />
      } 
    },{
      title: "登录",
      path: "/login",
      isNav: true,
      exact: false,
      render:(props)=>{
        //console.log(props.user);  
        if(props.user){
            return <Redirect to="/" />
        }
        return <Login {...props} />
      } 
    },{
      title: "班级",
      path: "/class/:page",
      isDynamic: true,
      to: "/class/1",
      isNav: true,
      exact: false,
      render:(props)=>{
        return <Class {...props} />
      }
    },{
        title: "404",
        path: "",
        exact: false,
        render:(props)=>{
          return <View404 {...props} />
        } 
      }
  ];

  export default routeList;