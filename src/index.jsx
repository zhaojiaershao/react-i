import React, {Component} from "react";
import Home from "./compontent/home/top";
import Banner from "./compontent/home/banner";
import Note from "./compontent/note/shiyan";//React
import Center from "./compontent/center/center2"//
import Text from "./compontent/text/center3"//前端框架
import Npm from "./compontent/npm/npms"
import Grammar from "./compontent/grammar/es6"
import './index.scss'
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      page: window.location.hash.slice(1) || "Banner"
    };
  }
  //跳转页面事件
  handeleChange = title => {
    this.setState({
      page: title
    });
    console.log(title)
   window.location.hash = title
  };
  render() {
    let Dom = "";
    switch (this.state.page) {
      case "Banner":
        Dom = <Banner />;
        break;
      case "Note":
        Dom = <Note />;
        break;
        case "Center":
        Dom = <Center />;
        break;
        case "Text":
        Dom = <Text />;
        break;
        case "Npm":
        Dom = <Npm />;
        break;
        case "Grammar":
        Dom = <Grammar />;
        break;
    }
    return (
      <div className='back'>
        <Home handelechange={this.handeleChange}>{Dom}</Home>
      </div>
    );
  }
}
