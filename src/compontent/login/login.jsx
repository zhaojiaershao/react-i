import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';

import { login } from './js/vrf';
import { login as reqLogin } from './api/api';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <button
          className="zrb-button-lg-rg"
          type="button"
          onClick={this.props.showmodal}
        >
          登陆
        </button>
        <Modal
          title="LOGIN"
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
          <div className="flex flex-around">
            <Button type="primary" onClick={this.handleSubmit}>
              登陆
            </Button>
            <Button
              type="primary"
              onClick={() => this.props.handlechange('register')}
            >
              注册
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
  // 修改input值
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  // 提交验证
  handleSubmit = () => {
    let state = login(this.state);
    if (state) {
      return alert(state);
    } else {
      // 登陆;
      reqLogin(this.state).then(res => {
        console.log(res.data.code);
        if (res.status === 200 && res.data.code) {
          // 通知父组件切换到首页
          // 存一份用户数据到本地
          return alert('登陆成功！');
        } else {
          alert(res.data.msg);
        }
      });
    }
  };
}
