import React from "react";
import ArrowPic from './img/caret-right-solid.png';

class Arrow extends React.Component{
    render(){
        return <div><img src={ArrowPic} width="5" height="5" alt=""/> </div>
    }
}
export default Arrow;