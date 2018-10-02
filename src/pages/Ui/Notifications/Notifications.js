import React from 'react';

import { Card, Row, Col } from "antd";

import Message  from "../../../utils/MessageUtlis";

import { Button } from 'antd';

import SuccessNotification from "./SuccessNotification/SuccessNotification";

import ErrorNotification from "./ErrorNotification/ErrorNotification";

import InfoNotification from "./InfoNotification/InfoNotification";

import WarningNotification from "./WarningNotification/WarningNotification";

import styles from "./Notifications.css";

class Notifications extends React.Component {

  notificationMessage = ()=>{
    Message.notificationMessage('error',{

    },()=>{
      console.log('封装关闭');
    })
  }
  render() {
    return (
      <div>
        <Card title='通知提醒框' className={styles.card}>
          <Row>
            <Col span='4'>
              <SuccessNotification/>            
            </Col>
            <Col span='4'>
              <ErrorNotification/>            
            </Col>
            <Col span='4'>
              <InfoNotification/>            
            </Col>
            <Col span='4'>
              <WarningNotification/>            
            </Col>
            <Col span='4'>
              <Button type="primary" onClick={this.notificationMessage}>自定义封装</Button>            
            </Col>
            
          </Row>
        </Card>
      </div>
    );
  }
}

export default  Notifications ;
