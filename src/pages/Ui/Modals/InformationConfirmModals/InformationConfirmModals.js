import React from 'react';

import { Row, Col } from "antd";

import Confirm from "./Confirm/Confirm";

import Warning from "./Warning/Warning";

import Error from "./Error/Error";

import Success from './Success/Success';

import Info from './Info/Info';

class InformationConfirmModals extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col span='6'>
            <Confirm />
          </Col>
          <Col span='6'>
            <Warning />
          </Col>
          <Col span='6'>
            <Error />
          </Col>
          <Col span='6'>
            <Success />
          </Col>
        </Row>
        <Row style={{marginTop:'20px'}}>
          <Col span='6'>
            <Info />
          </Col>
        </Row>
      </div>
    );
  }
}

export default InformationConfirmModals;
