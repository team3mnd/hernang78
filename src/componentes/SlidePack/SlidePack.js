import React from 'react';

export default class SlidePack extends React.Component {
  fourImages() {
    return this.props.setimg.map((img, index) => {
      return <div key={ index } className="overflow-hidden" style={{ width: "42vw", height: "30vw", margin: "1vw" }}><img className="col-xs-4 img-fluid d-block" style={{ width: "100%", height: "100%" }} src={img} alt={index} /></div>
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