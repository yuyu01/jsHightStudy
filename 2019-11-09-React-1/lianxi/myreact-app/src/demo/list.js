import React,{Component} from "react"

export default class List extends Component{

    render(){
        let {data,show,callBack} = this.props;
        let {title,list} = data;
        console.log(callBack)
        return (
        <dl className = {"friend-group "+(show === title?"expanded":"")}>
            <dt onClick = {()=>{
                callBack(title)
            }}>
            {title}</dt>
            {list.map((item,idx)=><dd key={idx}>{item.name}</dd>)}
        </dl>)
    }

}
