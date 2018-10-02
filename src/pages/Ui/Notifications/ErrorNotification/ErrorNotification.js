import React from 'react';

import { Button,notification } from "antd";


class ErrorNotification extends React.Component {

  onClick = () =>{
    notification.error({
      message:"工资提醒",
      placement:"bottomLeft",
      description:"上月考勤20天,迟到2天,实发工资250",
      key:"SuccessNotification",
      onClose(){
        console.log('222');
        
      }
    })
  }

  render() {
    return (
      <div>
        <Button type='danger' onClick={this.onClick}>Error</Button>
      </div>
    );
  }
}

export default  ErrorNotification ;
