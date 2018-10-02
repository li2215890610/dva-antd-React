import React from 'react';

import { Row, Col } from "antd";

import DefaultModals from "./DefaultModals/DefaultModals";

import LevelMiddleModals from "./LevelMiddleModals/LevelMiddleModals";

class BasicsModals extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col span='6'>
            <DefaultModals />
          </Col>
          <Col span='6'>
            <LevelMiddleModals />
          </Col>
        </Row>
      </div>
    );
  }
}

export default BasicsModals;
