import React from 'react';

import { Tabs, Button, Radio, Row } from "antd";

const TabPane = Tabs.TabPane;

class CustomDynamicAddTabs extends React.Component {
  constructor(props) {
    super(props)

    const panes = [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];

    this.state = {
      activeKey: panes[0].key,
      panes,
      mode: "top",
    }
  }


  handleModeChange = (e) => {
    this.setState({ mode: e.target.value })
  }



  changeCallback = (activeKey) => {
    this.setState({ activeKey });
    console.log(activeKey);

  }

  onEdit = (targetKey, action) => {
    //调用 remove
    this[action](targetKey);

    console.log(action, targetKey);
  }

  add = () => {
    let { panes } = this.state;

    const activeKey = `${panes.length + 1}`;

    panes.push({ title: `Tab ${activeKey}`, content: `Content of Tab Pane${(panes.length + 1)}`, key: activeKey });

    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let { activeKey, panes } = this.state;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    panes = panes.filter(pane => pane.key !== targetKey);

    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }


  render() {

    let { activeKey, panes, mode } = this.state;

    return (
      <div>

        <Radio.Group onChange={this.handleModeChange.bind(this)} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
        </Radio.Group>

        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>添加标签页</Button>
        </div>
        <Row style={{width:'500px'}}>
          <Tabs
            hideAdd
            number='100'
            tabPosition={mode}
            animated={false}
            onChange={this.changeCallback}
            activeKey={activeKey}
            type='editable-card'
            onEdit={this.onEdit}
          >
            {panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
          </Tabs>
        </Row>
      </div>
    );
  }
}

export default CustomDynamicAddTabs;
