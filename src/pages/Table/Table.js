import React from "react";

import { Route, Switch } from 'dva/router';

import BasicTable from "./BasicTable/BasicTable";

import DynamicTable from "./DynamicTable/DynamicTable";

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
            <Route path='/table/dynamic' component={DynamicTable}/>
        </Switch>
      </div>
    )
  }
}

export default Tables;