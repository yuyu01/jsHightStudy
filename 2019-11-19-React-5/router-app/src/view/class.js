import React from 'react';
import {NavLink,useHistory,useLocation,useRouteMatch,useParams} from "react-router-dom";
import data from "../data";
const pageLen = 3;
const len = Math.ceil(data.length/pageLen);
function List(props){
    console.log(useHistory());
    const {page} = useParams();
    return <ul>
        {data.filter((item,index)=>{
            return ((page-1)*pageLen <= index) &&(index<page*pageLen)
        }).map((item)=>{
            return <li key={item.id}>{item.title}</li>
        })}
    </ul>;
}
function ClassNav(props){
    return <nav className="page-nav">
        {[...(".".repeat(len))].map((item,index)=>{
            return <NavLink to={"/class/"+(index+1)} exact key={index}>{index+1}</NavLink>
        })}
    </nav>
}
function Class(props) {
    return (<div>
          <List />
          <ClassNav />
    </div>);
  }
export default Class;
