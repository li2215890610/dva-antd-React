import React from 'react';

import { Button, Modal } from "antd";

class Confirm extends React.Component {

  onOk = () =>{
    console.log('ok');
    
  }

  onCancel = () =>{
    console.log('Cancel');
  }

  handleConfirm = ()=>{
    let _this = this;
    Modal.confirm({
      cancelText:"取消",
      content:"这是Confirm内容",
      okText:"确定",
      title:"确认取消吗?",
      onOk(){
        _this.onOk()
      },
      onCancel(){
        _this.onCancel()
      }
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleConfirm}>Confirm</Button>
      </div>
    );
  }
}

export default Confirm;
