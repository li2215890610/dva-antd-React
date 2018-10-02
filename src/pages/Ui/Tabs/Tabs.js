import React from 'react';

import { Card, Row } from "antd";

import BasicsTabs from "./BasicsTabs/BasicsTabs";

import IconTabs from "./IconTabs/IconTabs";

import CustomDynamicAddTabs from "./CustomDynamicAddTabs/CustomDynamicAddTabs";

import styles from "./Tabs.css";

class Tabs extends React.Component {

  render() {
    return (
      <div>
        <Card title='Tab页签' className={styles.card}>
          <Row>
            <BasicsTabs/>
          </Row>
        </Card>
        <Card title='Icon-Tab页签' className={styles.card}>
          <Row>
            <IconTabs/>
          </Row>
        </Card>
        <Card title='自定义Tab页签' className={styles.card}>
          <CustomDynamicAddTabs/>
        </Card>
        
      </div>
    );
  }
}

export default  Tabs ;
