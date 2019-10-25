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
      page: 'Login'
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
      case 'Login':
        Dom = (
          <Login
            visible={this.state.visible}
            showmodal={this.showModal}
            handleok={this.handleOk}
            handlecancel={this.handleCancel}
            handleregister={this.handleRegister}
          />
        );
        break;

      case 'Register':
        Dom = (
          <Register
            visible={this.state.visible}
            showmodal={this.showModal}
            handleok={this.handleOk}
            handlecancel={this.handleCancel}
            handlelogin={this.handleLogin}
          />
        );
        break;
    }
    return (
      <div>
        {/* <Login
          visible={this.state.visible}
          showmodal={this.showModal}
          handleok={this.handleOk}
          handlecancel={this.handleCancel}
          handleclick={this.handleClick}
        /> */}
        {/* <Register
          visible={this.state.visible}
          showmodal={this.showModal}
          handleok={this.handleOk}
          handlecancel={this.handleCancel}
        /> */}
        {Dom}
      </div>
    );
  }
  //跳转到注册页面事件
  handleRegister = page => {
    this.setState({
      page: page
    });
  };
  //跳转到登陆的页面
  handleLogin = page => {
    this.setState({
      page: page
    });
  };
}
