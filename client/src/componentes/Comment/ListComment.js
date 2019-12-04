import React, { Component } from 'react'

export default class ListComment extends Component {
  state = {
    commentsList: []
  }

  componentDidUpdate(prevProps) {
    if (this.props.comments !== prevProps.comments) {
      this.setState({
        commentsList: this.props.comments
      })
    }
  }

  render() {
    console.log('------',this.state.commentsList)
    return (
      <div>
        {this.state.commentsList.map(comment=>
        <p>{comment.user}</p>)}
      </div>
    )
  }
}
