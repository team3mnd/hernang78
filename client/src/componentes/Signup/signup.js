import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Signup extends Component {
  render() {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <label htmlFor="name">Name: </label>
        <input type="text"  className='w-50 mb-2' />
        <label htmlFor="user">User: </label>
        <input type="text"  className='w-50 mb-2' />
        <label htmlFor="pass">New password: </label>
        <input type="password"  className='w-50 mb-2' />
        <Button>Create New User</Button>
      </div>
    );
  }
}
