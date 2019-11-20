import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {
  render() {
    return (
      <div>
        <p>Log In</p>
        <label htmlFor="user">User: </label>
        <input type="text"/>
        <br/>
        <label htmlFor="pass">Password: </label>
        <input type="password"/>
        <br/>
        <Button>Log In</Button>
      </div>
    );
  }
}