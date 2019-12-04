'../../images/activities/Kikibio'
import React, { Component } from 'react';
import SlidePack from './SlidePack/SlidePack';
import './card.css';
import Comment from '../Comment/Comment'
import ListComment from '../Comment/ListComment'

export default class Card extends Component {

  constructor() {
    super();
    this.sendComment = this.sendComment.bind(this);
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
        <ListComment comments = {this.props.comments}/>
        {/* send commment */}
        <Comment _id={this.props._id}/>
      </div>
    )
  }
}