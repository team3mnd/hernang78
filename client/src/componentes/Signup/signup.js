import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "../Nav/nav";
import Image from "react-bootstrap/Image";
import "./signup.css";
import GoogleLogin from 'react-google-login';
import ModalError from "../ModalError/ModalError";
import { Redirect, Link } from "react-router-dom";

export default class Signup extends Component {
  state = {
    textAddImage: 0,
    user: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    img: "",
    redirect: false,
    checkTC: false,
    expandChangeImage: false,
    imageProfile:
      "http://svgur.com/i/65U.svg",
    errors: "",
    useGoogle: false,
    mostrarErrores: false
  };

  valueUser(e) {
    this.setState({ user: e });
  }

  valuePassword(e) {
    this.setState({ password: e });
  }

  valueEmail(e) {
    this.setState({ email: e });
  }

  valueFirstName(e) {
    this.setState({ firstName: e });
  }

  valueLastName(e) {
    this.setState({ lastName: e });
  }

  changeImage() {
    if (this.state.img !== "") {
      this.setState({
        imageProfile: this.state.img,
        expandChangeImage: false,
        textAddImage: 1
      });
    }
  }

  obtenerDatos(e) {
    if (e !== null) { e.preventDefault() }
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      userName: this.state.user,
      mail: this.state.email,
      country: this.state.country,
      picture: this.state.imageProfile
    };
    if (!(this.state.checkTC)) {
      this.setState({
        errors: "You have to accept Terms and Conditions agreement",
        mostrarErrores: true
      })
    }
    else {
      fetch('/users/add', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(res => {
          if (res.expressErrors || res.databaseErrors) {
            if (res.expressErrors) {
              if (res.expressErrors.errors.length === 2) {

                this.setState({
                  errors: "Invalid Email & password (5 characters minimum)",
                  mostrarErrores: true
                })
              }
              else if (res.expressErrors.errors[0].param === "mail") {
                this.setState({
                  errors: "Invalid Email",
                  mostrarErrores: true
                })
              }
              else if (res.expressErrors.errors[0].param === "password") {
                this.setState({
                  errors: "Invalid password (5 characters minimum)",
                  mostrarErrores: true
                })
              }
            }

            if (res.databaseErrors) {
              if (res.databaseErrors.errors.mail && res.databaseErrors.errors.userName) {
                this.setState({
                  errors: "Email & username already registered",
                  mostrarErrores: true
                })
              }
              else {
                if (res.databaseErrors.errors.mail) {
                  this.setState({
                    errors: "Email already registered",
                    mostrarErrores: true
                  })
                } else if (res.databaseErrors.errors.userName) {
                  this.setState({
                    errors: "Username already used",
                    mostrarErrores: true
                  })
                }
              }
            }
          }
          else {
            this.setState({
              redirect: true
            })
          }
        })
        .catch(error => console.log("catch", error))
    }
  }

  renderRedirect = () => {
    if (this.state.redirect === true && this.state.useGoogle === false) {
      return <Redirect to='/login' />
    }
    if (this.state.redirect === true && this.state.useGoogle === true) {
      return <Redirect to='/' />
    }
  }

  mostrarErrores() {
    this.setState({
      mostrarErrores: false
    })
  }

  render() {
    const responseGoogle = (response) => {
      console.log(response)
      let { profileObj } = response
      this.setState({
        user: profileObj.givenName + profileObj.familyName + profileObj.googleId,
        password: "google_pass_y_ya_fue",
        email: profileObj.email,
        firstName: profileObj.givenName,
        lastName: profileObj.familyName,
        img: profileObj.imageUrl,
        checkTC: true,
        textAddImage: 1,
        imageProfile: profileObj.imageUrl,
        useGoogle: true
      })
      this.obtenerDatos(null)
    }

    return (
      <>
        {this.renderRedirect()}
        <NavBar />
        <div
          className="containerItinerary"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <div
            style={{
              width: "100%",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h3 className="row justify-content-center">Create account</h3>
            <div className="containerChangeImageProfile">
              <Image
                src={this.state.imageProfile}
                style={{ width: "220px", height: "220px", borderRadius: "50%" }}
                alt="imageProfile"
                onClick={() =>
                  this.setState({
                    expandChangeImage: !this.state.expandChangeImage
                  })
                }
              />
              {this.state.textAddImage === 0 && (
                <h5
                  className="texto-centrado-profile"
                  onClick={() =>
                    this.setState({
                      expandChangeImage: !this.state.expandChangeImage
                    })
                  }
                >
                  Add Photo?
                </h5>
              )}
            </div>
            {this.state.expandChangeImage && (
              <>
                <Form.Group controlId="user">
                  <Form.Label>Insert URL:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter URL image"
                    value={this.state.img}
                    onChange={e => this.setState({ img: e.target.value })}
                  />
                </Form.Group>
                <Button onClick={() => this.changeImage()}>Add Photo</Button>
              </>
            )}
          </div>

          {this.state.mostrarErrores &&
            <ModalError errors={this.state.errors} mostrar={() => this.mostrarErrores()} />
          }

          <Form className="px-5 container-fluid h-100">
            <Form.Group controlId="user">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                ref={this.textInput}
                placeholder="Enter username"
                value={this.state.user}
                onChange={e => this.valueUser(e.target.value)}
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

            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@example.com"
                value={this.state.email}
                onChange={e => this.valueEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="firstName">
              <Form.Label>First name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={this.state.firstName}
                onChange={e => this.valueFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={this.state.lastName}
                onChange={e => this.valueLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                value={this.state.country}
                onChange={e => this.setState({ country: e.target.value })}
              >
                <option value="">Choose...</option>
                <option value="england">England</option>
                <option value="france">France</option>
                <option value="germany">Germany</option>
                <option value="holland">Holland</option>
                <option value="ireland">Ireland</option>
                <option value="spain">Spain</option>
                <option value="unitedStates">United States</option>
              </Form.Control>
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
                <Form.Text className="text-muted">
                  I agree to MYtinerary´s <a href=" ">Terms &amp; Conditions</a>
                </Form.Text>
              </Form.Row>
            </Form.Group>
            <div className="row mt-4">
              <div className="text-center col-12">
                <Button
                  className="btn"
                  variant="primary"
                  type="submit"
                  onClick={e => this.obtenerDatos(e)}
                >
                  Submit
                </Button>
              </div>
              <div className="text-center col-12">
                <Link to="/login">
                  <h6 className="text-primary mt-3">
                    Or you can Login with Google
                  </h6>
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </>
    );
  }
}