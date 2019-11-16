import React,{Component} from 'react';
/*
    把数据和视图进行绑定    
    在适当的时候修改状态
*/
export default class List extends Component {
    state={
        show: false
    }
    render(){
        let {show} = this.state;
        let {data} = this.props;
        let {list,title} = data;
        return (
            <dl className={"friend-group "+(show?"expanded":"")}>
                <dt
                    onClick={()=>{
                        this.setState({
                            show: !show 
                        });
                    }}
                >{title}</dt>
                {list.map((item,index)=><dd key={index}>{item.name}</dd>)}
            </dl>);
    }
}