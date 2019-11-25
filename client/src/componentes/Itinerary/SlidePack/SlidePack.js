import React from 'react';
import './SlidePack.css'

export default class SlidePack extends React.Component {
  fourImages() {
    return this.props.setimg.map((img, index) => {
      return <div key={index} style={{ margin: "1%"}}>
          <img style={{ width:"30vw", height: "30vw", objectFit: "cover" }} src={img} alt={index} />
        </div>
    })
  }

  render() {
    return <div id='capaimg' className="container">
      <div className="d-flex">
        {this.fourImages()}
      </div>
    </div>
  }
}