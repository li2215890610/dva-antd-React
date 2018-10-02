import React from 'react';

import { Card, Row, Col } from "antd";

import { Button } from 'antd';

import Message  from "../../../utils/MessageUtlis";

import Successs from "./Successs/Successs";

import Errors from "./Errors/Errors";

import Infos from "./Infos/Infos";

import Warnings from "./Warnings/Warnings";

import styles from "./Messages.css";

class Messages extends React.Component {

  onMessages = () =>{
    Message.Messages('loading','通知',5)
  }

  render() {
    return (
      <div>
        <Card title='通知提醒框' className={styles.card}>
          <Row>
            <Col span='4'>
              <Successs/>            
            </Col>
            <Col span='4'>
              <Errors/>            
            </Col>
            <Col span='4'>
              <Infos/>            
            </Col>
            <Col span='4'>
              <Warnings/>            
            </Col>
            <Col span='4'>
              <Button type="primary" onClick={this.onMessages}>自定义封装</Button>            
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default  Messages ;
