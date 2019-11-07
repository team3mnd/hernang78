import React from 'react';
import './Slide.css';
import { images } from './images';
import img1 from './1.jpg';
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";
import img10 from "./10.jpg";
import img11 from "./11.jpg";
import img12 from "./12.jpg";

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
  img12
]

export class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: this.props.instance
    };
    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
  }

  left() {
    const c = this.state.class;
    const x = (backs.length - 1) / 4;
    if (c > 1) {
      this.setState({ class: c - 1 })
    } else {
      this.setState({ class: x })
    }
    this.props.change(this.left);
    return this.state.class;
  }

  right() {
    const c = this.state.class;
    const x = 1;
    if (c > 1) {
      this.setState({ class: c + 1 })
    } else {
      this.setState({ class: x })
    }
    this.props.change(this.right);
    return this.state.class;
  }

  render() {
    const n1 = {backgroundImage: 'url(' + backs[(this.state.class * 1) - 1] + ')'};
    const n2 = {backgroundImage: 'url(' + backs[(this.state.class * 2) - 1] + ')'};
    const n3 = {backgroundImage: 'url(' + backs[(this.state.class * 3) - 1] + ')'};
    const n4 = {backgroundImage: 'url(' + backs[(this.state.class * 4) - 1] + ')'};
    return <div>
      <button onClick={this.left}>Left</button>
      <div className="slide" style={ n1 }></div>
      <div className="slide" style={ n2 }></div>
      <div className="slide" style={ n3 }></div>
      <div className="slide" style={ n4 }></div>
      <button onClick={this.right}>Right</button>
    </div>
  }
}

export default Slide;