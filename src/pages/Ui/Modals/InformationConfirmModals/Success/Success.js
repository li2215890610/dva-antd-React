import React from 'react';

import { Button, Modal } from "antd";

class Success extends React.Component {

  onOk = () =>{
    console.log('ok');
  }

  onCancel = () =>{
    console.log('Cancel');
  }

  handleSuccess = ()=>{
    let _this = this;
    Modal.success({
      content:"这是Success内容",
      okText:"确定",
      title:"确认取消吗?",
      maskClosable:true,
      onOk(){
        _this.onOk()
      }
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleSuccess}>Success</Button>
      </div>
    );
  }
}

export default Success;
