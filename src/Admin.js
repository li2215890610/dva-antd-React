import React from "react";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

import NavLeft from "./components/NavLeft/NavLeft";

import Content from "./components/Content/Content";

import styles from './styles/common.css';


import { Layout } from 'antd';



class Admin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Layout className={styles.container} >
          <NavLeft className={styles.nav_left} />
          <Layout className={styles.content}>
              <Header />
              <Content/>
              <Footer />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Admin;