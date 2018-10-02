import React from 'react';

import { Button } from "antd";

class LoadingButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      btnFont:"关闭"
    }
  }


  handleCloseLoading = () => {    
    let {loading} = this.state;
    this.setState({
      btnFont: loading ? "打开":"关闭",
      loading: loading ? false:true
    });
  }

  render() {
    let { loading, btnFont } = this.state;
    return (
      <div className='card-wrap'>
        <Button type="primary" loading={loading}>确定</Button>
        <Button type="primary" shape="circle" loading={loading}></Button>
        <Button loading={loading} >点击加载</Button>
        <Button shape="circle" loading={loading}></Button>
        <Button type="primary" onClick={this.handleCloseLoading}>{btnFont}</Button>
      </div>
    );
  }
}

export default LoadingButton;
