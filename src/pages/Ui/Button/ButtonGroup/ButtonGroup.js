import React from 'react';

import { Button } from "antd";

class IconButton extends React.Component {
  // 如果想实用 icon 图标  去copy 图标类 替换 icon属性 
  render() {
    return (
      <div className='card-wrap'>
        <Button.Group>
          <Button type="primary" icon="left" style={{marginRight:0}}>返回</Button>
          <Button type="primary" icon="right">前进</Button>
        </Button.Group>
      </div>
    );
  }
}

export default IconButton;
