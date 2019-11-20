import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <p>Create new account</p>
        <label htmlFor="name">Name: </label>
        <input type="text" />
        <br />
        <label htmlFor="user">User: </label>
        <input type="text" />
        <br />
        <label htmlFor="pass">New password: </label>
        <input type="password" />
        <br />
        <Button>Create New User</Button>
      </div>
    );
  }
}
