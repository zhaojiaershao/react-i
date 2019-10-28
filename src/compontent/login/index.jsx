import React, { Component } from 'react';
import './index.scss';
//引入登陆注册页面
import Login from './login';
import Register from './register';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      page: 'register'
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    let Dom = '';
    switch (this.state.page) {
      case 'login':
        Dom = (
          <Login
            visible={this.state.visible}
            showmodal={this.showModal}
            handleok={this.handleOk}
            handlecancel={this.handleCancel}
            handlechange={this.handleChange}
          />
        );
        break;

      case 'register':
        Dom = (
          <Register
            visible={this.state.visible}
            showmodal={this.showModal}
            handleok={this.handleOk}
            handlecancel={this.handleCancel}
            handlechange={this.handleChange}
          />
        );
        break;
    }
    return <div>{Dom}</div>;
  }
  //跳转页面
  handleChange = info => {
    console.log(info);
    this.setState({
      page: info
    });
  };
}
