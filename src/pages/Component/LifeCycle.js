import React from "react";

import A from "./A";

import B from "./B";

class LifeCycle extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:0,
    }
  }

  handleChangeInput = ( value)=>{
    this.setState({
      value:value
    })
  }
  render(){
    let { value} = this.state;
    return(
      <div>
        <A handleChangeInput={this.handleChangeInput}/>
        <B value={value}/>
      </div>
    )
  }
  
}

export default LifeCycle;