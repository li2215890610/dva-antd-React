import React from 'react';

import { Button,notification } from "antd";


class SuccessNotification extends React.Component {

  onClick = () =>{
    notification.success({
      message:"工资提醒",
      placement:'topLeft',
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
        <Button onClick={this.onClick}>Success</Button>
      </div>
    );
  }
}

export default  SuccessNotification ;
