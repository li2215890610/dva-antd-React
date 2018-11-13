import React from "react";

import { Button } from 'antd';


// 封装无状态组件
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

    // loaded ? ( errored ? '加载失败':'暂无数据'):"loading" 
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