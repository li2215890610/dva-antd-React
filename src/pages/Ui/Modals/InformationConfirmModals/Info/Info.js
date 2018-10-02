import React from 'react';

import { Button, Modal } from "antd";

class Info extends React.Component {

  onOk = () =>{
    console.log('ok');
  }

  onCancel = () =>{
    console.log('Cancel');
  }

  handleInfo = ()=>{
    // let _this = this;
    Modal.info({
      cancelText:"取消",
      content:"这是Info内容",
      okText:"确定",
      title:"确认取消吗?",
      maskClosable:true,
      onOk(){
        // _this.onOk()
      }
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleInfo}>Info</Button>
      </div>
    );
  }
}

export default Info;
