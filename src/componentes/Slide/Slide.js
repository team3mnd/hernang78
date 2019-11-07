import React from 'react';
import './Slide.css';
import { images } from './images';
import img1 from './1.jpg';
import imgs from './imgs';

let backs = [
  images.n1,
  images.n2,
  images.n3,
  images.n4,
  images.n5,
  images.n6,
  images.n7,
  images.n8,
  images.n9,
  images.n10,
  images.n11,
  images.n12
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
    const x = (this.state.backs.length - 1) / 4;
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
    const n1 = {backgroundImage: 'require(' + backs[this.state.class * 1] + ')'};
    const n2 = {backgroundImage: 'require(' + backs[this.state.class * 2] + ')'};
    const n3 = {backgroundImage: 'require(' + backs[this.state.class * 3] + ')'};
    const n4 = {backgroundImage: 'require(' + backs[this.state.class * 4] + ')'};
    return <div>
      <button onClick={this.left}>Left</button>
      <div className="slide" style={ n1 }></div>
      <div className="slide" style={ n2 }></div>
      <div className="slide" style={ n3 }></div>
      <div className="slide" style={ n4 }></div>
      <img src={ backs[0] } alt='' />
      <img src={ imgs[0] } alt='' />
      <img src={ images.n1 } alt='' />
      <button onClick={this.right}>Right</button>
    </div>
  }
}

export default Slide;