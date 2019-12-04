import React, { Component } from 'react';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../Nav/NavbarMain.css";
import "../Itinerary/Itinerary.css";
import { connect } from "react-redux";
import {sendComment} from '../../store/actions/commentActions'
const jwt = require("jsonwebtoken");

class Comment extends Component {
  constructor(){
    super();
    this.getComment = this.getComment.bind(this);
    this.state = {
      userName: '',
      token: '',
      imageUrl: '',
      message: '',
      date: ''
    }
  }
  componentDidMount() {
    const token = localStorage.getItem('token');
    const tokenDecoded = jwt.decode(token);
    this.setState({ token });
    if (localStorage.getItem('success') === 'true') {
      const userName = tokenDecoded.username;
      const imageUrl = tokenDecoded.picture
      this.setState({ imageUrl });
      this.setState({ userName })
    }
  }

  setValueMessage(string) {
    this.setState({ message: string })
  }

  getComment(){
    let comment={
      comment: this.state.message,
      date: this.state.date,
      photo: this.state.imageUrl,
      user: this.state.userName,
      _id : this.props._id
    }
    this.props.commentSend(comment)
  }

  render() {
    return (
      <div>
        {
          localStorage.getItem('success') === 'true'
            ?
            <div className='d-flex flex-row justify-content-around align-items-center' >
              <div className="containerImageProfile">
                <Image
                  src={this.state.imageUrl}
                  style={{ width: "50px", height: "50px", borderRadius: "50%", padding: '2%' }}
                  alt="imageProfile"
                />
              </div>
              <div className='d-flex flex-column align-items-center p-1'>
                <input type="text" className="input-group-text" id="inputGroup-sizing-sm" placeholder=" Your comment..." value={this.state.message}
                  onChange={e => this.setValueMessage(e.target.value)} />
                <Button
                  className="btn m-1"
                  variant="primary"
                  type="button"
                  onClick={this.getComment}>
                  Send
                </Button>
              </div>
            </div>
            :
            <div>
              <p className='text-center containerItinerary'>You have to be log to add a comment</p>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comment: state.commentReducer.comment,
    sending: state.commentReducer.isSending
  };
};

const mapDispatchToProps = (dispatch) => ({
  commentSend: (comment) => {
    dispatch(sendComment(comment))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
