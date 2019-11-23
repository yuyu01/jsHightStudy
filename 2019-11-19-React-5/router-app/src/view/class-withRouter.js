import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import data from "../data";
const pageLen = 3;
const len = Math.ceil(data.length/pageLen);
// 1: 0 1 2   ((page-1)*pageLen <= index) &&(index<page*pageLen)
// 2: 3 4 5  
// 3: 6 7
function List(props){
    const {page} = props.match.params;
    // console.log(props);
    return <ul>
        {data.filter((item,index)=>{
            return ((page-1)*pageLen <= index) &&(index<page*pageLen)
        }).map((item)=>{
            return <li key={item.id}>{item.title}</li>
        })}
    </ul>;
}
let List2 = withRouter(List); 
// react 高阶组件 传入一个组件返回一个新组件
function ClassNav(props){
    return <nav className="page-nav">
        {[...(".".repeat(len))].map((item,index)=>{
            return <NavLink to={"/class/"+(index+1)} exact key={index}>{index+1}</NavLink>
        })}
    </nav>
}
// function Class(props) {
//   let {match} = props;  
//   return (<div>
//         <List page={match.params.page} />
//         <ClassNav />
//   </div>);
// }
function Class(props) {
    // let {match} = props;  
    return (<div>
          <List2 />
          <ClassNav />
    </div>);
  }
export default Class;
