import React from 'react';

import { Button, Modal } from "antd";

import styles from "./LevelMiddleModals.css";

class DefaultModals extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modals: false
    }
  }

  handleOpen = (e,data) => {
    console.log(e,data);
    this.setState({
      modals: true
    })
  }

  handleCancel = () =>{
    this.setState({
      modals: false
    })
  }

  render() {
    let { modals } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.handleOpen.bind(this,'222')}>modals居中</Button>
        <Modal
          title="modals居中"
          visible={modals}
          wrapClassName={styles.vertical_center_modal}
          cancelText="取消"
          okText="确定"
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
        >
          <p>modals居中</p>
        </Modal>
      </div>
    );
  }
}

export default DefaultModals;
