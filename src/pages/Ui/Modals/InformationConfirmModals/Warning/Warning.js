import React from 'react';

import { Button, Modal } from "antd";

class Warning extends React.Component {

  onOk = () =>{
    console.log('ok');
    
  }

  onCancel = () =>{
    console.log('Cancel');
  }

  handleWarning = ()=>{
    let _this = this;
    Modal.warning({
      content:"这是Warning内容",
      okText:"确定",
      title:"确认取消吗?",
      onOk(){
        _this.onOk()
      }
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleWarning}>Warning</Button>
      </div>
    );
  }
}

export default Warning;
