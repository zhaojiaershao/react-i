import React, {Component} from "react";
import Official from "./official"
import {Carousel} from "antd";

export default class Banner extends Component {
  render() {
    return (
      <div className='box-phh'>
         <div>
        <Carousel autoplay>
          <div>
           <img src="./timg.jpg" alt="" width='100%' height='90%'/>
          </div>
          <div>
          <img src="./信息.jpg" alt="" width='100%' height='90%'/>
          </div>
          <div>
          <img src="./信息2.jpg" alt="" width='100%' height='90%'/>
          </div>
          <div>
          <img src="./技术.jpg" alt="" width='100%' height='90%'/>
          </div>
        </Carousel>
       
      </div>
      <Official/>
      </div>
     
    );
  }
}
