import React from "react";
import Cleave from 'cleave.js/react';

const Form=(props)=>{
    return(
<form>
  <p className="h4 text-center mb-4">VISA CARD</p>
  <label htmlFor="" className="grey-text">Card Number</label>
  {/* <input type="text"  className="form-control"  onChange={props.change}  options={props.optionsCleave}/> */}
  <Cleave className="form-control" placeholder="4*** **** **** ****"
                options={{creditCard: true,
                    onCreditCardTypeChanged: function (type) {
                        // Visa:        XXXX XXXX XXXX XXXX
                    }}}
                
                onChange={props.change} name="value" />
  <br/>
  <label htmlFor="" className="grey-text">Name</label>
  <input type="text"  className="form-control" maxLength={20} name="cardholder" onChange={props.change} placeholder="Write your name here" />
  <br/>
  <label htmlFor=""  className="grey-text">Valid thru</label>
 
  <Cleave className="form-control" placeholder="mm/yy"
                options={{date: true,datePattern: ['m', 'y']}}
                
                onChange={props.change} name='valid' />
  <br/>
 </form>
    )
}
export default Form;