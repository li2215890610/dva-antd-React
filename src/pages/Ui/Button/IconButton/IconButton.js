import React from 'react';

import { Button } from "antd";

class IconButton extends React.Component {
  // 如果想实用 icon 图标  去copy 图标类 替换 icon属性 
  render() {
    return (
      <div className='card-wrap'>
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
      </div>
    );
  }
}

export default  IconButton ;
