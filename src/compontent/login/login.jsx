import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';

export default class Login extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Button type="primary" style={{marginLeft:'50px',marginTop:'10px'}} onClick={this.props.showmodal}>
          登陆
        </Button>
        <Modal
          title="LOGIN"
          visible={this.props.visible}
          onOk={this.props.handleok}
          onCancel={this.props.handlecancel}
        >
          <label>
            <Input placeholder="账号：" />
          </label>
          <label>
            <Input placeholder=" 密码：" />
          </label>
          <label>
            <Button type="primary">登陆</Button>
            <Button
              type="primary"
              onClick={() => this.props.handleregister('Register')}
            >
              注册
            </Button>
          </label>
        </Modal>
      </div>
    );
  }
}
