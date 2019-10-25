import React from 'react';
import './index.scss'
import { List } from 'antd';

const data = [
    <h2>React</h2>,
    `React是一个用于创建用户界面的开源JavaScript库，旨在解决开发单页应用程序时遇到的挑战。`,
    `优点：
    1、小巧，高效，快捷灵活；
    2、简单的组件模型；
    3、良好的文档和在线资源；
    4、可实现服务器端渲染；
    5、目前受欢迎，经历了快速增长。`,
    `缺点：
    1、需要学习新的概念和语法；
    2、构建工具很重要；
    3、需要其它类库或框架提供model和Controller部分；
    4、与修改DOM的代码和其它类库不兼容。`,
    'End',
    <h2>Vue.js</h2>,
    `通常，大家不信任年轻的程序员是因为他们缺乏经验。然而，很多新技术却吸引了大量的程序员，因为它们弥补了以前工具的缺点。这就是Vue.js成功的地方。`,
    `程序员让Vue.js尽可能简单，并让接近88％的用户对其感到满意。Vue用于阿里巴巴、百度和WizzAir等。`,
    `优点：
    1、可以快速使用，并且日益普及；
    2、很容易提高高水平开发人员的满意度；
    3、依赖性小，性能好。`,
    `缺点：
    1、一个较新的项目– 风险可能会更大；
    2、部分依赖开发人员进行更新；
    3、相比于其它框架，资源较少；`,
    'End',
    <h2>AngularJS</h2>,
    'angularjs是一个javascript框架。通过script脚本引入，是一个用Javascript编写的库。angularjs通过指令扩展了HTML，通过表达式绑定数据到HTML中。',
    'AngularJS主要考虑的是构建CRUD（增删改查）应用。幸运的是，至少90%的WEB应用都是CRUD应用。.',
    '优点:1、一些大公司正在使用的流行框架2、开发现代Web应用程序的解决方案3、是标准MEAN栈（MongoDB，Express.JS，AngularJS，NodeJS）的一部分，有许多文章和教程可用',
    `缺点：
    1、学习曲线陡峭
    2、大的代码库
    3、无法升级到Angular2.x`,
    'End',
    <h2>Backbone.js</h2>,
    `backbone作为一个老牌js框架为大规模前端开发提供了新的开发思路:前端MVC模式。`,
    `这个模式也是前端开发演变过程中的一个重要里程碑，也为MVVM和Redux等开发思路奠定了基础，后来的react，vue无不是在backbone的影响下开创出来的经典模式。
    `,
    `优点：
    1、体积小，重量轻，复杂度低；
    2、不添加HTML逻辑；
    3、文件丰富；
    4、采用了许多应用，包括Trello、WordPress.com、LinkedIn和Groupon。`,
    `缺点：
    1、与AngularJS等其它框架相比，抽象度较低；
    2、需要额外的组件来实现数据绑定等功能；
    3、最新的框架已经不采用MVC架构了。`,
    `End`,
    <h2>Ember.js</h2>,
    `这是一个用于创建web应用的JavaScript MVC框架，采用基于字符串的Handlebars模板，支持双向绑定、观察者模式、计算属性（依赖其他属性动态变化）、自动更新模板、路由控制、状态机等。`,
    `优点：
    1、为客户端应用程序提供了单一解决方案；
    2、开发人员可以立刻提高开发效率– 它使用jQuery；
    3、良好的向后兼容性和升级选项；
    4、采用了现代Web开发标准。`,
    `缺点：
    1、大型分配式；
    2、与其它正在向较小组件结构发展的框架相比，它十分的庞大。`,
    `End`,
    <h2>Knockout.js</h2>,
    `Knockout.js是一个基于MVVM模式的轻量级的前端框架，能够友好地处理数据模型和界面DOM的绑定。`,
    `最重要的是，它的绑定是双向的，也就是说数据模型变化了，界面DOM上的数据也会跟着发生变化，反过来，界面DOM上的数据变化了，数据模型也会相应这个变化。`,
    `这样能够大大减少我们的前端代码量，并且使得我们界面易于维护，再也不用写一大堆事件监控数据模型和界面DOM的变化了。`,
    `优点：
    1、小而轻便，无依赖；
    2、优秀的浏览器支持；
    3、良好的文档资源。`,
    `缺点：
    1、较大的项目可能变得很复杂；
    2、发展已经放缓；
    3、使用情况似乎在减弱。`,
  ];
export default props => {
    return <>
        <List
            style={{width:1200}}
            header={<div><h2>前端开发框架</h2></div>}
            footer={<div>这只是总结的一些框架，还有很多框架没有被介绍想要了解更多，请阅读<a href="https://blog.csdn.net/panda_panda_/article/details/83304369">https://blog.csdn.net/panda_panda_/article/details/83304369</a></div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
        />
    </>
}