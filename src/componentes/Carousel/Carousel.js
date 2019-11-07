import React from 'react';
import './Carousel.css';
import Slide from '../Slide/Slide';

import img1 from '../Slide/1.jpg';
import img2 from "../Slide/2.jpg";
import img3 from "../Slide/3.jpg";
import img4 from "../Slide/4.jpg";
import img5 from "../Slide/5.jpg";
import img6 from "../Slide/6.jpg";
import img7 from "../Slide/7.jpg";
import img8 from "../Slide/8.jpg";
import img9 from "../Slide/9.jpg";
import img10 from "../Slide/10.jpg";
import img11 from "../Slide/11.jpg";
import img12 from "../Slide/12.jpg";

let backs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12]

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 2
    }
    this.changeS = this.changeS.bind(this);
  }

  changeS(n) {
    this.setState({ slide: n });
  }

  four() {
    let slideGroup;
    
    for(var i = 1; i <= backs.length; i+=4){
      let slidePack =backs.slice(i, 4);
      slideGroup += <Slide setimg={slidePack}/>;
    }
    console.log(slideGroup)
    return slideGroup;
  }

  render() {
    return (
      <div>
        {this.four()}
      </div>);
  }
}

export default Carousel;