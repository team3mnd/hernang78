import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import NavBar from "../Nav/nav";
import { Link } from "react-router-dom";
import { getExit } from '../../store/actions/sesionActions';
import { connect } from "react-redux";

class Logout extends Component {
  state = {
    user: "",
    password: "",
    checkRemember: false,
    redirect: false
  };

  componentDidMount() {
    this.props.sessionOff();
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="containerItinerary" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <p className='text-center text-success'>you have successfully logged out</p>
        </div>

        <div className="btn w-50 m-auto d-block">
          <Link to="/">
            <Button alt="button2" > Back Home </Button>
          </Link>
        </div>

      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sessionOff: () => dispatch(getExit())
  };
};

export default connect(null, mapDispatchToProps)(Logout);