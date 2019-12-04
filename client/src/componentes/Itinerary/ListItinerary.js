// Funcionales
import React, { Component } from 'react';
import { Link } from "react-router-dom";
// Estilo
import './Itinerary.css'
// Conexion
import { connect } from "react-redux";
import { getAllItineraries } from '../../store/actions/itineraryActions.js';
// Components
import Itinerary from './Itinerary';
import Loading from '../Loading';
import NavBar from '../Nav/nav';

class ListItinerary extends Component {
  state = {
    listItinerary: []
  }

  componentDidMount() {
    this.props.setItinerary(this.props.match.url)    
  }

  componentDidUpdate(prevProps){
    if (this.props.itineraryCity !== prevProps.itineraryCity){
      this.setState({
        listItinerary: this.props.itineraryCity
      })
    }
  }

  render() {
    const { listItinerary } = this.state
    return (
      <>
        <NavBar />
        {this.props.loading ?
          <Loading />
          :
          <>
            <div className="containerListItinerary">
              {listItinerary.map((itinerary, i) => (
                <Itinerary key={i} itinerary={itinerary}  />
              ))}
            </div>
            <div className="d-flex justify-content-center">
              <Link to="/cities">Choose another city</Link>
            </div>
          </>
        }

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itineraryCity: state.itineraryReducer.itineraryCity,
    loading: state.itineraryReducer.isFetching
  }
};

const mapDispatchToProps = (dispatch) => ({
  setItinerary: (pathname) => {
    dispatch(getAllItineraries(pathname))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItinerary);




