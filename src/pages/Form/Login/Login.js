import React from "react";

import { Card } from "antd";

import InlineFrom from "./InlineFrom/InlineFrom";

import LevelFrom from "./LevelFrom/LevelFrom";

import "../Form.less";

class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }    
  }

  render (){
    return(
      <div>
          <Card title="内联表单" className="card">
            <InlineFrom/>
          </Card>
          <Card title="水平表单" className="card">
            <LevelFrom/>
          </Card>
      </div>
    )
  }
}

export default Login;