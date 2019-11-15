import React from 'react';

export default class SlidePack extends React.Component {
  fourImages() {
    return this.props.setimg.map((img, index) => {
      return <div key={index} style={{ maxWidth: "40%", height: "30vw", margin: "1%", overflow: "hidden" }}><img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={img} alt={index} /></div>
    })
  }

  render() {
    return <div className="container">
      <div className="row justify-content-center">
        {this.fourImages()}
      </div>
    </div>
  }
}