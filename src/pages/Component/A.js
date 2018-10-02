import React from "react";

import {  Input } from "antd";

class A extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  time = null

  handleChangeInput = (e) =>{

   let value = e.target.value;
   clearTimeout(this.time)

   this.time = setTimeout(()=>{
      this.props.handleChangeInput(value)
    },1000)
  }

  render(){
    return(
      <div>
        <Input type="number" placeholder="请输入" onChange={this.handleChangeInput}/>
      </div>
    )
  }
  
}

export default A;