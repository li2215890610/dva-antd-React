import React from "react";

import { Route, Switch } from 'dva/router';

import Login from "./Login/Login";

import Register from "./Register/Register";

class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }    
  }

  render (){
    return(
      <div>
        <Switch>
            <Route path='/form/login' component={Login}/>
            <Route path='/form/reg' component={Register}/>

        </Switch>
      </div>
    )
  }
}

export default Form;