import React, {Component} from "react";
import Login from '../login/index'
import {Menu, Dropdown, Icon} from "antd";
import "./index.scss";
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const nav = [
  {
    title:'Banner',
    text:'首页',
    boolean:false,

  },
  {
    title:'Note',
    text:'React',
    boolean:false,

  },
  {
    title:'Text',
    text:'前端框架',
    boolean:false,
  },
 
 
  {
    title:'Npm',
    text:'Mount依赖',
    boolean:false,

  },
  {
    title:'Center',
    text:'Vue',
    boolean:false,

  },
  {
    title:'Grammar',
    text:'ES6常用语法',
    boolean:false,

  }
];
export default class Top extends Component {
  render() {
    return (
      <div>
        <div className="box-hh">
          <img 
            src="./狗.jpg"
            alt=""
          />
          {
            nav.map((item,index)=>{
              return <Dropdown overlay={menu} visible={item.boolean}  key={index}>
              <a className="ant-dropdown-link" href="#" onClick={(e)=>this.props.handelechange(item.title)}>
                {item.text}
              </a>
            </Dropdown>
            })
          }
          <Login/>
        </div>
        {this.props.children}
      </div>
    );
  }
}
