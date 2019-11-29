import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "../Nav/nav";
import { Link, Redirect } from "react-router-dom";
import "./login.css";
import { getAccess } from '../../store/actions/sesionActions.js';
import { connect } from "react-redux";
import GoogleLogin from'react-google-login';



class Login extends Component {
  state = {
    user: "",
    password: "",
    checkRemember: false,
    redirect: false
  };

  valueUser(e) {
    this.setState({ user: e });
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.success)
    if (this.props.success !== prevProps.success){
      this.setState({
        redirect: this.props.success
      });
    }
 }

  valuePassword(e) {
    this.setState({ password: e });
  }

  obtieneLogin(e) {
//    e.preventDefault()
    let user = {
      email: this.state.user,
      password: this.state.password,
      useGoogle: false
    };
    console.log('obtieneLogin');
    this.props.login(user);
  }
  renderRedirect = () => {
    if (this.state.redirect === true) {
      console.log(this.state.redirect)
      return <Redirect to='/' />
    }
  }
  render() {
    const responseGoogle = (response) => {
      let user = {
        email: response.profileObj.email,
        password: 'password',
        useGoogle: true
      };
      this.props.login(user)
    }
    return (
      <>
        <NavBar />
        <div className="containerItinerary" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h3 className="row justify-content-center">Login</h3>
          <Form className="px-5 container-fluid h-100">
            <Form.Group controlId="user">
              <Form.Label>Username o email:</Form.Label>
              <Form.Control
                type="text"
                ref={this.textInput}
                placeholder="Enter username o email"
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
{this.renderRedirect()}
            <Form.Group>
              <div className="row justify-content-center justify-content-md-start">
                <Button 
                className="btn" 
                variant="primary" 
                type="button"
                onClick={e => this.obtieneLogin(e)}>
                  OK
                </Button>
              </div>
            </Form.Group>

            <div>
              <Form.Group>
                <div className="row justify-content-center justify-content-md-start">
                  <GoogleLogin
                    clientId="748277599795-5567kmucrd0ti6fc7ip3o0lp0vt7tqdr.apps.googleusercontent.com"
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}/>
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

const mapStateToProps = (state) => {
  return {
    success: state.sesionReducer.success,
    token: state.sesionReducer.token
  }
};

const mapDispatchToProps = (dispatch) => ({
  login: (user) => {
    dispatch(getAccess(user))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);