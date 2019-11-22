
import React, { Component } from 'react';
import { connect } from "react-redux";
import './Itinerary.css'
import { getItinerary } from '../../store/actions/itineraryActions.js';
import image1 from '../../images/profile/GaudiLover.png'
import Activities from '../Activities/activities'

class Itinerary extends Component {
  state = {
    listItinerary: [],
    loading: true,
    expandActivities: false
  }
  async getItinerary() {
    await this.props.setItinerary(this.props.match.url)
    setTimeout(() => {
      this.setState({
        listItinerary: this.props.itineraryCity,
        loading: false
      })
    }, 2000);
  }

  componentDidMount() {
    this.getItinerary()
  }

  clickExpand(e){
    console.log(e)
    this.setState({
      expandActivities: !this.state.expandActivities
    })
  }


  render() {
    const { loading, listItinerary } = this.state
    console.log(listItinerary);
    return (
      <>
        {loading ?
          "Loading.."
          :
          <div className='d-flex flex-column justify-content-center'>
            <div>
              <h1 className='text-center'>{listItinerary[0].nameCity}</h1>
            </div>
            <h5>Available Mytineraries:</h5>
            <div className='container-listItinerary'>
              {listItinerary.map((itinerary, p) =>
                <div className='container-itinerary' key={itinerary._id}>
                  <div className='wrapper-itinerary d-flex flex-row align-items-center justify-content-around'>
                    <div className='container-author w-20'>
                      <img src={image1} alt="imageProfiler" width="50%" style={{borderRadius: "50%"}} />
                      <p>{itinerary.author}</p>
                      {/* <p>{itinerary.picturePath}</p> */}
                    </div>
                    <div className='container-info w-80'>
                      <p>{itinerary.title}</p>
                      <div className='d-flex flex-row'>
                        <span className='m-1'>Likes: {itinerary.rating}</span>
                        {/* <p>{itinerary.likes}</p> */}
                        <span className='m-1'>Hours: {itinerary.duration}</span>
                        <span className='m-1'>Price: {itinerary.price}</span>
                      </div>
                      <div className='w-100 d-flex flex-row flex-wrap'>
                        {itinerary.hashtags.map((hash, i) =>
                          <div className="m-1" key={i}>
                            <span>{hash}</span>
                          </div>
                        )}
                      </div>


                    </div>
                  </div>
                  {
                    this.state.expandActivities && <Activities  listActivities={itinerary}/>
                  }
                  <button onClick={() => this.clickExpand(p)}>View all</button>
                </div>
              )}
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
