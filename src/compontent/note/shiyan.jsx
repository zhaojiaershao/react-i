import React, { Component } from 'react';
import './index.scss';
import { Card } from 'antd';

export default props => {
    return <>
    <div className='box'>
    <Card size="small" title="组件" extra={<a href="https://zh-hans.reactjs.org/docs/components-and-props.html#___gatsby">More</a>} style={{ width: 280 ,marginBottom: '10px' }}>
            <p>组件有无状态组件和class组件</p>
            <p>无状态组件：他只接受一个 props 属性，<br />
                优点；加载快，渲染快<br />
                缺点：功能单一，只能是存一些 dom 片段；<br />
                使用：ui 组件去使用<br />
            </p>
            <p>class 组件：它拥有全部的 react 特性，<br />
                优点：功能强大<br />
                缺点：需要实例化，相对于无状态组件加载慢渲染慢；<br />
                使用：作为功能组件<br />
            </p>
            <p>组件的三个要素：类型（自定义组件/原生 dom 类型），属性，内容或子元素</p>
            <h3>注意事项：</h3>
            <p>自定义组件在使用的时候，必须首字母是大写，{'<MyCOm />'};
                同样自定义组件手写字母不能是小写，因为小写的时候，react 会默认从原生的 dom 库里去找，找不到就报错了</p>
        </Card>
        <Card size="small" title="jsx" extra={<a href="https://zh-hans.reactjs.org/docs/jsx-in-depth.html#___gatsby">More</a>} style={{ width: 280 ,marginBottom: '10px' }}>
            <p>jsx是 createElement 方法的语法糖，是 js 的扩展，它看上去很像 html，但底层是 js，所以拥有全部的 js 特性</p>
            <p>{`<MyButton color="blue" shadowSize={2}>`}<br />
                Click Me<br />
                {`</MyButton>`}</p>
            <p>class组件可以参考工厂函数</p>
            <p>会编译为</p>
            <p>
                React.createElement(<br />
                MyButton,<br />
                {`{color: 'blue', shadowSize: 2},`}<br />
                'Click Me'<br />
                )
                </p>
        </Card>
        <Card size="small" title="点组件概念" style={{ width: 280 ,marginBottom: '10px' }}>
            <p>一个对象属性得出的元素类型并使用 jsx 来书写</p>
            <p>好处：灵活，可复用性强</p>
            <p>点组件是用 props 控制的</p>
        </Card>
        <Card size="small" title="state 和 props" extra={<a href="https://zh-hans.reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props">More</a>} style={{ width: 280 ,marginBottom: '10px' }}>
            <p>
            state 状态<br/>
            定义：class 组件自由的状态；不可以直接修改，必须用 setState 方法<br/>
            作用：控制组件内的元素的状态
            </p>
            <p>
            props 传值及组件间的通信；<br/>
            属性的默认值：defultProps：只有 class 组件有；<br/>
            属性的类型验证：propTypes：只有 class 组件有，需要引入第三方的包,要引入第三方的包'props-tyes'
            </p>
            <p>
            总结：state 和 props<br/>
            相同点：1.都是存数据的 2.修改后都会触发更新 3.都是控制元素的<br/>
            不同点：1.状态是组件自身的，属性是父级传给子级的 2.状态是组件自身可以修改的，属性必须是父级修改 3.属性可以设置默认值和类型验证，状态没有
            </p>
        </Card>
        <Card size="small" title="setState" extra={<a href="https://zh-hans.reactjs.org/docs/react-component.html#setstate">More</a>} style={{ width: 280 ,marginBottom: '10px' }}>
            <p>在 react 中修改 state 是异步的，如果需要修改后立即拿到被修改后的 state，需要在使用 setState 的时候传函数的形式去写；</p>
            <p>setState({'{}'})===默认就是异步修改</p>
            <p>setState(fun,fun);===将异步修改为同步这两个回调，第一个是用来修改 state 的，第二个回调函数是获取被修改后的 state</p>
        </Card>
        <Card size="small" title="react 生命周期" extra={<a href="https://zh-hans.reactjs.org/docs/state-and-lifecycle.html#___gatsby">More</a>} style={{ width: 280 ,marginBottom: '10px' }}>
            <p>生命周期: 程序在不同阶段所呈现的状态；</p>
            <p>
            挂载时有 constructor render componentDidMount<br/>
            更新时有 render componentDidUpate<br/>
            卸载时有 componentWillUnmount // 清除常占内存
            </p>
            <p>- component[组件]、Did[完成]、Will[准备]、Mount[挂载]、unMount[卸载]、update[更新]</p>
            <p>不常用生命周期：</p>
            <p>
            shouldComponentUpdate ： <br/>
            定义：用来拦截新的属性和状态，用新旧值来控制组件是否更新，从而优化性能；<br/>
            参数：第一个是新的属性更新做处理，因为强制更新没有新的属性和状态；
            </p>
            <p>forceUpdate:强制更新</p>
        </Card>
        <Card size="small" title="合成事件" extra={<a href="https://zh-hans.reactjs.org/docs/events.html#___gatsby">More</a>} style={{ width: 280 ,marginBottom: '10px' }}>
            <p>清除冒泡：必须显示的使用 stopPropagation()<br/>
            event.stopPropagation();<br/>
            阻止默认事件：preventDefault();<br/>
            event.preventDefault();<br/>
            获取被触发元素<br/>
            event.target<br/>
            获取事件绑定的元素<br/>
            event.currentTarget;<br/>
            获取原生的 event 对象<br/>
            event.nativeEvent</p>
            <p>event 对象只要是在异步的方法里，就会丢失属性值<br/>
            解决办法：event.persist()强制去除合并事件，保留属性值 </p>
        </Card>
        <Card size="small" title="class 组件 this 指向" style={{ width: 280 ,marginBottom: '10px' }}>
            <p>箭头函数 优先使用 它的好处在于，我们的 this 指向是当前环境的对象，<br/>
            箭头函数自身没有 this，它会逐级向上找 this，找到后就拿过来。
            </p>
            <p>在 constructor 中设置 this 指向<br/>
            this.handleClick01 = this.handleClick01.bind(this)</p>
            <p>在标签上直接改变 this<br/>
            {'<button onClick={this.handleClick01.bind(this)}>点击我</button>'}</p>
        </Card>
    </div>
      
    </>
}