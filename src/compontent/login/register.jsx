import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';

import { register } from './js/vrf';
import { register as reqRegister } from './api/api';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      repassword: '',
      email: '',
      chebox: false
    };
  }
  //受控组件，修改input框的值
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.name === 'chebox' ? target.checked : target.value
    });
  };
  render() {
    const { username, password, repassword, email, chebox } = this.state;
    return (
      <div>
        <button
          className="zrb-button-lg-rg"
          type="button"
          onClick={this.props.showmodal}
        >
          注册
        </button>
        <Modal
          title="Basic Modal"
          visible={this.props.visible}
          onOk={this.props.handleok}
          onCancel={this.props.handlecancel}
        >
          <label>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="用户名"
            />
          </label>
          <label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="密码"
            />
          </label>
          <label>
            <Input
              type="text"
              name="repassword"
              value={repassword}
              onChange={this.handleChange}
              placeholder="确认密码"
            />
          </label>
          <label>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="邮箱"
            />
          </label>
          <label className="zrb-chebox">
            <input
              type="checkbox"
              checked={chebox}
              name="chebox"
              value="checkbox"
              onChange={this.handleChange}
            />
            <a>请同意协议</a>
          </label>
          <div className="flex flex-around">
            <Button
              type="primary"
              onClick={() => this.props.handlechange('login')}
            >
              登陆
            </Button>
            <Button type="primary" onClick={this.handeleRegister}>
              注册
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
  handeleRegister = () => {
    let state = register(this.state);
    if (state) {
      return alert(state);
    } else {
      reqRegister({
        repassword: this.state.repassword,
        password: this.state.password,
        username: this.state.username,
        email: this.state.email,
        chebox: this.state.chebox
      }).then(res => {
        // 只有当接口成功返回后，再对值进行处理
        if (res.status === 200) {
          if (res.data.code) {
            this.props.handlechange('login');
            alert('注册成功！');
          } else {
            alert(res.data.msg);
          }
        }
      });
    }
  };
}
