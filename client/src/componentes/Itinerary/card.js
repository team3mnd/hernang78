'../../images/activities/Kikibio'
import React, { Component } from 'react';
import SlidePack from './SlidePack/SlidePack';
import './card.css';

export default class Card extends Component {

  constructor(){
    super();
    this.sendComment = this.sendComment.bind(this);
  }

  listComments(){
    let comments = this.props.comments.map((i)=>{
    return <li className="list-group-item" key={i}>{i}</li>
    });

    return (
      <ul className="my-2 list-group">
        {comments}
      </ul>
    );
  }

  pictures(){
    let {Activities} = this.props;
    console.log(Activities.map(i=>i.picture))
    return Activities.map(i=>i.picture);
  }

  sendComment(e){
    console.log(this.props)
  }
  render() {
    return (
      <div>
        {<SlidePack className="img" setimg={ this.pictures() } />}
        {this.listComments()}
        <input type="text" className="my-2 form-control" placeholder=" Your comment..." onChange={this.sendComment}/>
        {/* <input type="submit" value="Submit"> */}
      </div>
    )
  }
}