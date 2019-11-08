import Carousel from 'react-bootstrap/Carousel';
import SlidePack from '../SlidePack/SlidePack';
import React from 'react';
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

export class Carousel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <SlidePack setimg={ backs.slice(0, 4) } />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <SlidePack setimg={ backs.slice(4, 8) } />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <SlidePack setimg={ backs.slice(8, 12) } />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Carousel2;