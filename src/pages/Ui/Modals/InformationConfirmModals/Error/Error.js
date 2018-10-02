import React from 'react';

import { Button, Modal } from "antd";

class Error extends React.Component {

  onOk = () =>{
    console.log('ok');
    
  }

  onCancel = () =>{
    console.log('Cancel');
  }

  handleError = ()=>{
    let _this = this;
    Modal.error({
      content:"这是Error内容",
      okText:"确定",
      title:"Error",
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
        <Button type="danger" onClick={this.handleError}>Error</Button>
      </div>
    );
  }
}

export default Error;
