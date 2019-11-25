
// Funcionales
import React, { Component } from 'react';
import { Link } from "react-router-dom";
// Estilo
import './Itinerary.css'
// Conexion
import { connect } from "react-redux";
import { getItinerary } from '../../store/actions/itineraryActions.js';
// Components
import Itinerary from './Itinerary';
import Loading from '../Loading';



class ListItinerary extends Component {
  state = {
    listItinerary: [],
    loading: true
  }

  async getItinerary() {
    await this.props.setItinerary(this.props.match.url)
    setTimeout(() => {
      this.setState({
        listItinerary: this.props.itineraryCity,
        loading: false
      })
    }, 1500);
  }

  componentDidMount() {
    this.getItinerary()
  }

  render() {
    const { loading, listItinerary } = this.state
    return (
      <>
        {loading ?
          <Loading />
          :
          <>
          <div className="containerListItinerary">
            {listItinerary.map((itinerary, i) => (
              <Itinerary key={i} itinerary={itinerary}/>
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
    itineraryCity: state.itineraryReducer.itineraryCity
  }
};

const mapDispatchToProps = (dispatch) => ({
  setItinerary: (pathname) => {
    dispatch(getItinerary(pathname))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItinerary);




