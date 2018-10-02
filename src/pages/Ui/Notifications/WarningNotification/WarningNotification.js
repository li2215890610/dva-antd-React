import React from 'react';

import { Button,notification } from "antd";


class WarningNotification extends React.Component {

  onClick = () =>{
    notification.warning({
      message:"工资提醒",
      placement:'topRight',
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
        <Button type='primary' onClick={this.onClick}>Warning</Button>
      </div>
    );
  }
}

export default  WarningNotification ;
