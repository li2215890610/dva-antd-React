import React from "react";

import Header from "components/Header/Header";

import Footer from "components/Footer/Footer";

import SiderMenu from "components/SiderMenu/SiderMenu";

import Content from "components/Content/Content";

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
        <Layout>
          <SiderMenu/>
          <Layout>
            <Header/>
            <Content/>
            <Footer/>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Admin;