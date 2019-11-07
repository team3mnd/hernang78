import React from 'react';
import './Carousel.css';
import Slide from '../Slide/Slide';

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 1
    }
    this.changeS = this.changeS.bind(this);
  }

  changeS(n) {
    this.setState({ slide: n });
  }

  render() {
    return <div>
      <Slide instance={ this.state.slide } change={ this.changeS } />
    </div>
  }
}

export default Carousel;