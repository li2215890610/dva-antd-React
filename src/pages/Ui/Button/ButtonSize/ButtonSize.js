import React from 'react';

import { Button, Radio } from "antd";

class ButtonSize extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size:'default'
    }
  }


  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  render() {
    let { size } = this.state;
    return (
      <div className='card-wrap'>
        <Radio.Group value={size} onChange={this.handleChange}>
          <Radio value="small">小</Radio>
          <Radio value="default">中</Radio>
          <Radio value="large">大</Radio>
        </Radio.Group>
        <Button type="primary" size={size}>Imooc</Button>
        <Button size={size}>Imooc</Button>
        <Button type="dashed" size={size}>Imooc</Button>
        <Button type="danger" size={size}>Imooc</Button>
      </div>
    );
  }
}

export default ButtonSize;
