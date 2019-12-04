'../../images/activities/Kikibio'
import React, { Component } from 'react';
import SlidePack from './SlidePack/SlidePack';
import './card.css';
import Comment from '../Comment/Comment'

export default class Card extends Component {

  constructor() {
    super();
    this.sendComment = this.sendComment.bind(this);
  }

  listComments() {
    let comments = this.props.comments.map((i) => {
      return <li className="list-group-item" key={i}>{i}</li>
    });
    return (
      <Comment _id={this.props._id} />
    );
  }

  activities() {
    let { Activities } = this.props;
    return Activities.map(i => i);
  }


  sendComment(e) {
    console.log(e)
  }
  render() {
    return (
      <div className='d-flex justify-content-center flex-column'>
        <SlidePack className="img" setObj={this.activities()} />
        <h5 style={{marginTop: "15px"}}>Comments: </h5>
        <span>{this.listComments()}</span>
        {/* send commment */}
        <Comment _id={itinerary._id}/>
      </div>
    )
  }
}