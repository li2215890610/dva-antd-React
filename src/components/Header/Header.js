import React from 'react';

import styles from "./Header.css";

import { Layout, Col, Row, Modal } from 'antd';

const { Header } = Layout;


class Headers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  componentDidMount = ()=>{    
    this.setState({
      userName:"热特姐"
    })
  }

  loginOrd = ()=>{
    Modal.confirm({
      cancelText:"取消",
      content:"这是Confirm内容",
      okText:"确定",
      title:"确认取消吗?",
      onOk(){
        const location = {
            // pathname: `/home/${name}/${ks}`,
            pathname: `/login`,
        }
      
      window._history.push(location)
      },
      onCancel(){
        
      }
    })
  }

  render(){

    let { userName} = this.state;
    return (
      <Header>
        <Row>
          <Col span='24' className={styles.header_top}>
            <div className={styles.header_Go_Out}>
              <span>欢迎～{userName}</span>
              <a onClick={this.loginOrd}>退出</a>
            </div>
          </Col>
        </Row>
      </Header>
    );
  }
}


export default Headers;