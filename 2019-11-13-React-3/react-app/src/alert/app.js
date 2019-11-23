import React,{PureComponent} from "react";
import Alert from "./alert";
class Btn extends PureComponent {
    render(){
        return <button onClick={()=>{
            this.props.hide();
        }}>关闭</button>
    }
}

class App extends PureComponent {
    render(){
        return <div>
            {/* <Alert
                title="开课吧"
            >
                <Btn />
            </Alert> */}
            {/* <Alert  title="开课吧" Child={Btn} /> */}
            <Alert  title="开课吧" cb={(props)=>{
                return <Btn {...props} />
            }} />
        </div>
    }
}

export default App;