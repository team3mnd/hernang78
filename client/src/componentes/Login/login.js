import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {
  render() {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <label htmlFor="user">User: </label>
        <input type="text" className='w-50 mb-2'/>
        <label htmlFor="pass">Password: </label>
        <input type="password" className='w-50 mb-2'/>
        <Button>Log In</Button>
      </div>
    );
  }
}