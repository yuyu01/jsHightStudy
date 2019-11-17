import React,{Component} from "react"

export default class List extends Component{
    state={
        show:false
    };
    render(){
        let {show} = this.state;
        let {data} = this.props;
        let {title,list} = data;
        return (
        <dl className = {"friend-group "+(show?"expanded":"")}>
            <dt onClick = {()=>{
                this.setState({
                    show:!show
                });
            }}>
            {title}</dt>
            {list.map((item,idx)=><dd key={idx}>{item.name}</dd>)}
        </dl>)
    }

}
