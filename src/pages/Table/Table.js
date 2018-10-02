import React from "react";

import { Route, Switch } from 'dva/router';

import BasicTable from "../Table/BasicTable/BasicTable";

class Tables extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }    
  }

  render (){
    return(
      <div>
        <Switch>
            <Route path='/table/basic' component={BasicTable}/>
        </Switch>
      </div>
    )
  }
}

export default Tables;