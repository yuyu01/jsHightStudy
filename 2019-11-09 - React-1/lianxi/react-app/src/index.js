import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// let arr=["a","b","c"]
// let sty = {
//     background:"red",
//     width:"100px",
//     width:"20px",
// }
// ReactDOM.render(
//     <div>
//         {arr.map((item,idx)=> <div style ={sty} key={idx}>{item}</div>)}

//     </div>,
//     document.getElementById('root')
// )
ReactDOM.render(
    <App data={{name:"名字",age:13}}/>,document.getElementById('root'));
