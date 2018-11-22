import React from "react";

const Cardholder=({setHTML1})=>{
   
        return <div dangerouslySetInnerHTML={setHTML1} style={{textTransform:"uppercase"}}></div>
  
}
export default Cardholder;