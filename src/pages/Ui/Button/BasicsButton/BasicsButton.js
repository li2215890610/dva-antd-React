import React from 'react';

import { Button } from "antd";

class BasicsButton extends React.Component {

  onClick = () =>{

  }
  render() {
    return (
      <div className='card-wrap'>
          <Button type="primary" onClick={this.onClick}>确定</Button>
          <Button>默认</Button>
          <Button type="dashed">虚线边框</Button>
          <Button type="danger">删除</Button>
          <Button disabled>禁用</Button>
      </div>
    );
  }
}

export default  BasicsButton ;
