import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'

export class Loading extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <Spinner animation="border" role="status">
        </Spinner>
      </div>
    )
  }
}

export default Loading
