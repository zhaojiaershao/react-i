import React from 'react';
import { Collapse } from 'antd';
import './index.scss'
const { Panel } = Collapse;

export default props => {
    return <>
    <div className="box-fqr">
    <Collapse accordion>
            <Panel header="导航激活样式" key="1" style={{width: 1200}}>
                <p>router-link-exact-active 严格匹配</p>
                <p>router-link-active / /list 可以配合 router-link 标签加 exact 属性进行严格匹配    </p>
            </Panel>
            <Panel header="export 和 import 目录" key="2">
                <p>export 导出的是一个定义</p>
                <p>export 不能导出具体值 export default 可以导出具体值</p>
                <p>export 和 import:</p>
                <p>export 的引入方式1 作为整个对象引入</p>
                <p>export 的引入方式2 解构赋值的方式</p>
                <p>export default 和 import:</p>
                <p>export default 1;<br/>
                export default 导出的引入方式<br/>
                import x from '/xx';</p>
            </Panel>
            <Panel header="async 和 await 异步终极解决方案" key="3">
                <p>async 表示函数里面有异步，async 的返回值是 promise</p>
                <p>await 通常跟 promise await+ promise 当前 promise 执行的结果</p>
                <p>cors 跨域 nginx webpack</p>
            </Panel>
            <Panel header="ref 的用法" key="4">
                <p>写在元素上是获取的原生 dom 元素</p>
                <p>写在组件上获取的是组件的实例</p>
                <p>this.$refs.你命的名字 判断元素滚动到底部</p>
                <p>{'scorllHeight < scrollTop + clientHeiht + 10;'}</p>
            </Panel>
            <Panel header="路由跳转" key="5">
                <p>route 路由信息对象 router 路由实例</p>
                <p>事件 this.$router.push()</p>
                <p>router-link tag 用来转化标签名</p>
                <p>(1) 路由跳转 params 传参 需要配置路由 /:id /: 表示必须有但是不固定的值 (2) 如果 params 使用 path 需要用字符串拼接</p>
                <p>//params的案例<br/>
                {`:to="{ name: 'detail', params: { id: item.id } }"`}<br/>
                {`:to=`+"{ {path: `/detail/${item.id}`} }"}</p>
                <p>//query 用path和name都可以<br/>
                {`:to="{ {path: /detail/, query: { id: item.id }} }"`}</p>
                <p></p>
            </Panel>
            <Panel header="跨域的方式" key="6">
                <p>webpack 代理 vue.config.js</p>
                {`module.exports = {
                  devServer: {
                    proxy: 'http://localhost:3000'
                  }
                };`}
                <p>cors 跨域 跨域资源共享(后端配置) // post get put delete Restful 风格的接口 post 新增 put 修改 get 获取 delete 删除</p>
                <p>ngix 反向代理</p>
                <p>更多：window.name localtion.hash postmessage websocket node 中间层 �jsonp docment.domain(只是二级域名) qq.com vip.qq.com</p>
            </Panel>
            <Panel header="组件化好处" key="7">
                <p>可复用 可组合 可维护 vue router 什么时候用 query 什么时候用 params</p>
            </Panel>
        </Collapse>
    </div>
       
    </>
}