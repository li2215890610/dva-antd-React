import React from 'react';

import { Button,notification } from "antd";


class InfoNotification extends React.Component {

  onClick = () =>{
    notification.info({
      message:"工资提醒",
      placement:'bottomRight',
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
        <Button type='dashed' onClick={this.onClick}>Info</Button>
      </div>
    );
  }
}

export default  InfoNotification ;
