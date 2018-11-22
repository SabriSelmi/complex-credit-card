
import React from "react";

import './App.css';
import Title from "./components/title";
import Puce from "./components/puce";
import Chiffre from "./components/chiffre";
import Chiffre1 from "./components/chiffre1";
import Cardholder from "./components/cardholder";
import Date from "./components/date";
import Visa from "./components/visa";
import Arrow from "./components/arrow";
import Form from "./components/form";


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleChange1 = this.handleChange1.bind(this);
    // this.handleChange2 = this.handleChange2.bind(this);
    this.state = { cardholder:'',value: '4***************',valid:'mm/yy'};
  }

  handleChange=(e)=> {
    this.setState({ [e.target.name]: e.target.value});
  }
  // handleChange1(e){
  // this.setState({ cardholder: e.target.value.toUpperCase()});
  // }
  // handleChange2(e){
  //   this.setState({ valid: e.target.value});
  //   }
  
  

  getRawMarkup1() {
    
    return { __html: this.state.cardholder };
  }
  
  getRawMarkup2() {
    
    return { __html: this.state.valid };
  }

  render(){
    return (
      <div>
      <div className="row ml-5 mt-4">
      <div className="col-sm-5" >
      <Form change={this.handleChange}/>
      </div>
        
        
          <div className="carde col-sm-5 ml-5 mt-5" >
            <div className="row">
            <div className="col-md-12 title">           
            <Title/>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12 puce"><Puce/>
            </div>
            </div>

            <div className="row">
                <div className="col-md-9 chiffre"><div className="chiffres"><Chiffre setHTML={this.state.value}/></div>
                <div className="row"> <div className="col-md-12 date" >MONTH/YEAR</div></div>
                <div className="row">
                
                <div className="col-md-8"> <Chiffre1/> </div>
                <div className="col-md-1 date">VALID<br/>THRU </div>
                <Arrow/>
                <div className="col-md-2 date1"><Date setHTML={this.getRawMarkup2()}/></div>
                </div>
                <div className='cardholder'><Cardholder  setHTML1={this.getRawMarkup1()}/></div>
                </div>
                <div className="col-md-2 chiffre"><Visa/> </div>
            </div>
            </div>
        
      </div>
      </div>
    )

  }
};

        
export default App;