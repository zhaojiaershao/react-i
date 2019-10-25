import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';

export default class Register extends Component {
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.props.showmodal}>
          注册
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.props.visible}
          onOk={this.props.handleok}
          onCancel={this.props.handlecancel}
        >
          <label>
            <Input placeholder="账号：" />
          </label>
          <label>
            <Input placeholder="账号：" />
          </label>
          <label>
            <Input placeholder="确认密码：" />
          </label>
          <label>
            <Input placeholder="邮箱：" />
          </label>
          <label>
            <Button
              type="primary"
              onClick={() => this.props.handlelogin('Login')}
            >
              登陆
            </Button>
            <Button type="primary">注册</Button>
          </label>
        </Modal>
      </div>
    );
  }
}
