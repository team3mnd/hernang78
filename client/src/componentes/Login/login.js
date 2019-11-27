import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "../Nav/nav";
import { Link } from "react-router-dom";
import "./login.css";

export default class Login extends Component {
  state = {
    user: "",
    password: "",
    checkRemember: false
  };

  valueUser(e) {
    this.setState({ user: e });
  }

  valuePassword(e) {
    this.setState({ password: e });
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="containerItinerary" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3 className="row justify-content-center">Login</h3>
          <Form className="px-5 container-fluid h-100">
            <Form.Group controlId="user">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                ref={this.textInput}
                placeholder="Enter username"
                value={this.state.user}
                onChange={e => this.valueUser(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={e => this.valuePassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="policy">
              <Form.Row className="pl-1">
                <Form.Check
                  type="checkbox"
                  label=""
                  checked={this.state.checkTC}
                  onChange={() =>
                    this.setState({ checkTC: !this.state.checkTC })
                  }
                />
                <Form.Text className="text-muted">Remember me.</Form.Text>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <div className="row justify-content-center justify-content-md-start">
                <Button className="btn" variant="primary" type="ok">
                  OK
                </Button>
              </div>
            </Form.Group>

            <div>
              <Form.Group>
                <div className="row justify-content-center justify-content-md-start">
                  <Button
                    className="btn socialButton"
                    variant="primary"
                    type="LogGoogle"
                  >
                    Log in with Google
                  </Button>
                </div>
              </Form.Group>

              <Form.Group>
                <div className="row justify-content-center justify-content-md-start">
                  <Button
                    className="btn socialButton"
                    variant="primary"
                    type="LogFacebook"
                  >
                    Log in with Facebook
                  </Button>
                </div>
              </Form.Group>
              <div>
                <p>
                  Dont't have a Mytinerary account yet? You should create one!
                  It's totally free and only takes a minute.
                </p>
              </div>
              <div className="d-flex justify-content-center m-4">
                <Link to="/signup">Create Account</Link>
              </div>
            </div>
          </Form>
        </div>
      </>
    );
  }
}
