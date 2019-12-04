import React, { Component } from 'react';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../Nav/NavbarMain.css";
import "../Itinerary/Itinerary.css";
import { connect } from "react-redux";
import { sendComment } from '../../store/actions/commentActions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const jwt = require("jsonwebtoken");

class Comment extends Component {
  constructor() {
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

  componentDidUpdate(prevProps){
    if (this.props.comments !== prevProps.comments){
      console.log(this.props.comments);
    }
  }

  setValueMessage(string) {
    this.setState({ message: string })
  }

  getComment() {
    let comment = {
      comment: this.state.message,
      date: this.setState.date,
      photo: this.state.imageUrl,
      user: this.state.userName,
      _id: this.props._id
    }

    this.setState({
      message : ''
    })
    this.props.updateComment(comment);
    this.setState({ message: '' });
  }

  render() {
    return (
      <div>
        {
          localStorage.getItem('success') === 'true'
            ?
            <div className='d-flex flex-row justify-content-center align-items-center w-100' >
              <div className="containerImageProfile">
                <Image
                  src={this.state.imageUrl}
                  style={{ width: "50px", height: "50px", borderRadius: "50%", padding: '2%' }}
                  alt="imageProfile"
                />
              </div>
              <div className="input-group mb-1">
                <input type="text" className="form-control-sm" placeholder="Your comment..." value={this.state.message}
                  onChange={e => this.setValueMessage(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <Button
                    className="btn-sm"
                    variant="primary"
                    type="button"
                    onClick={this.getComment}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Button>
                </div>
              </div>
            </div>
            :
            <div>
              <p className='text-center containerItinerary'>You have to be logged in to comment</p>
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
