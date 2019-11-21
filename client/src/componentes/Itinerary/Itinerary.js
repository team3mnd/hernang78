import React, { Component } from 'react';
import { connect } from "react-redux";
import {getItinerary} from '../../store/actions/itineraryActions.js';

class Itinerary extends Component {

  componentDidMount(){
   this.props.setItinerary(this.props.match.url)
  }
  render() {
    return (
      <div>
        {this.props.itineraryCity}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itineraryCity: state.itineraryCity
    }
};

const mapDispatchToProps = (dispatch)=> ({
    setItinerary: (pathname) => {
      dispatch(getItinerary(pathname))
     }
});

export default connect(mapStateToProps,mapDispatchToProps)(Itinerary);