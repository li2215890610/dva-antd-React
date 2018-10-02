import React from 'react'

import { Card, Spin, Icon, Alert, Switch} from  'antd';

import styles from "./Loadings.css";

class Loadings extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        loading:false
      }
    }
    toggle = (value) => {
      this.setState({ loading: value });
    }

    render(){

        const icon = <Icon  type="loading" style={{fontSize:24}}/>
        const iconLoading = <Icon type="loading" style={{ fontSize: 24 }} />
        let { loading} = this.state;
        return (
            <div>

                <Card title="Spin用法" className={styles.card}>
                    <Spin size="small"/>
                    <Spin style={{margin:'0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{ marginLeft: 10 }} spinning={true}/>
                </Card>
                <Card title="控制" className={styles.card}>
                    Loading state：<Switch checked={loading} onChange={this.toggle} />
                </Card>
                <Card title="内容遮罩" className={styles.card}>
                    <Alert
                        message="Loading"
                        description="Loading使用"
                        type="info"
                        style={{ marginBottom: 10 }}
                    />
                    <Spin spinning={loading}>
                        <Alert
                            message="Loading"
                            description="Loading使用"
                            type="warning"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin tip="加载中..." spinning={loading}>
                        <Alert
                            message="Loading"
                            description="Loading使用 可以把table包裹里面"
                            type="warning"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin indicator={iconLoading} spinning={loading} delay={500}>
                        <Alert
                            message="React"
                            description="Loading使用  delay延迟500"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}

export default Loadings;