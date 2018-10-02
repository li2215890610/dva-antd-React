import React from "react";

import { Button } from 'antd';

export default class EmptyListContent extends React.Component{ 

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render (){

    const {
      loaded,
      errored
    } = this.props;

    return (
      loaded 
      ? ( errored 
          ? ( this.props.errorContent || "加载失败" )
          : ( this.props.emptyContent || "暂无内容" )
        )
      : <Button size="small" shape="circle" loading />
    )
  }

}