import React from 'react';
import { List } from 'antd';
import data from './data.json';
import './npms.scss';

const image = [
  {
    src: require('./img/1.png'),
    title: '一、使用之前，我们先来掌握3个东西是用来干什么的',
    describe: 'npm: Nodejs下的包管理器',
    describe2:
      'webpack: 它主要的用途是通过CommonJS的语法把所有浏览器端需要发布的静态资源做相应的准备，比如资源的合并和打包',
    describe3:
      'vue-cli: 用户生成Vue工程模板。（帮你快速开始一个vue的项目，也就是给你一套vue的结构，包含基础的依赖库，只需要 npm install就可以安装）',
    describe4: '开始：'
  },
  {
    src: require('./img/2.png'),
    describe: '如图，下载8.9.3 LTS （推荐给绝大部分用户使用）'
  },
  {
    src: require('./img/3.png'),
    describe: '双击安装'
  },
  {
    src: require('./img/4.png'),
    describe: '可以使用默认路径，本例子中自行修改为d:\nodejs'
  },
  {
    src: require('./img/5.png'),
    describe: '一路点Next'
  },
  {
    src: require('./img/6.png'),
    describe: '点Finish完成'
  },
  {
    src: require('./img/7.png')
  },
  {
    src: require('./img/8.png'),
    describe: '打开CMD，检查是否正常'
  },
  {
    src: require('./img/9.png')
  },
  {
    src: require('./img/10.png'),
    describe:
      '输入命令npm config set registry=http://registry.npm.taobao.org 配置镜像站'
  },
  {
    src: require('./img/11.png'),
    describe: '输入命令npm config list 显示所有配置信息，我们关注一个配置文件'
  },
  {
    src: require('./img/12.png'),
    describe: 'C:UsersAdministrator.npmrc'
  },
  {
    describe: '使用文本编辑器编辑它，可以看到刚才的配置信息'
  },
  {
    src: require('./img/13.png'),
    describe: '检查一下镜像站行不行命令:npm config get registry'
  },
  {
    src: require('./img/14.png'),
    describe: '检查一下镜像站行不行命令:npm info vue 看看能否获得vue的信息'
  },
  {
    src: require('./img/15.png')
  },
  {
    src: require('./img/16.png')
  },
  {
    describe: '注意，此时，默认的模块D:\nodejs\node_modules 目录',
    describe2: '将会改变为D:\nodejs\node_global\node_modules 目录',
    describe3: '如果直接运行npm install等命令会报错的。'
  }
];

export default () => {
  return (
    <div className="zrbMax">
      <h1>npm安装教程</h1>
      <List>
        {image.map(item => {
          return (
            <div>
              <h1>{item.title}</h1>
              <h2>{item.describe}</h2>
              <h2>{item.describe2}</h2>
              <h2>{item.describe3}</h2>
              <h2>{item.describe4}</h2>
              <img src={item.src} alt="" />
            </div>
          );
        })}
      </List>
      <h1>npm 的使用</h1>
      <List>
        {data.npms.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.titel}</h2>
              <p>{item.describe}</p>
              <p>{item.describe2}</p>
              <p>{item.describe3}</p>
            </div>
          );
        })}
      </List>
    </div>
  );
};
