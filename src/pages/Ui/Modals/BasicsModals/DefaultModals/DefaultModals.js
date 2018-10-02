import React from 'react';

import { Button, Modal } from "antd";

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
        <Button type="primary" onClick={this.handleOpen.bind(this,'222')}>基础弹窗</Button>
        <Modal
          title="基础弹窗"
          visible={modals}
          style={{top:'100px'}}
          cancelText="取消"
          okText="确定"
          onOk={this.handleCancel}
          onCancel={this.handleCancel}
        >
          <p>基础弹窗</p>
        </Modal>
      </div>
    );
  }
}

export default DefaultModals;
