'../../images/activities/Kikibio'
import React, { Component } from 'react';
import SlidePack from './SlidePack/SlidePack';
import './card.css';

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
      <ul className="m-2 list-group">
        {comments}
      </ul>
    );
  }

  pictures() {
    let { Activities } = this.props;
    return Activities.map(i => i.picture);
  }

  sendComment(e) {
    console.log(e)
  }
  render() {
    return (
      <div className='d-flex justify-content-center flex-column'>
        <SlidePack className="img" setimg={this.pictures()} />
        <h5>Comments: </h5>
        <span>{this.listComments()}</span>
        <input type="text" className="w-80 form-control" placeholder=" Your comment..." onChange={this.sendComment} />
        {/* <input type="submit" value="Submit"> */}
      </div>
    )
  }
}