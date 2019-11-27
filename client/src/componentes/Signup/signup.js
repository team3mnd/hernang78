import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Signup extends Component {
  render() {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center w-100'>
        <h2>Create Account</h2>
        <div className='mt-2'>
          <div className='d-flex flex-row  w-90 mb-2'>
            <label htmlFor="name" className='mr-1'>Username: </label>
            <input type="text" />
          </div>
          <div className='d-flex flex-row w-90 mb-2'>
            <label htmlFor="user" className='mr-1'>Password: </label>
            <input type="text" />
          </div>
          <div className='d-flex flex-row w-90 mb-2'>
            <label htmlFor="pass" className='mr-1'>Email: </label>
            <input type="password" />
          </div>
          <div className='d-flex flex-row w-90 mb-2'>
            <label htmlFor="pass" className='mr-1'>First name: </label>
            <input type="password" />
          </div>
          <div className='d-flex flex-row w-90 mb-2'>
            <label htmlFor="pass" className='mr-1'>Last name: </label>
            <input type="password" />
          </div>
        </div>

        <Button>Create New User</Button>
      </div>
    );
  }
}

