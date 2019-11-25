import React, { Component } from "react";
import "./cities.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllCities } from "../../store/actions/citiesActions";
import Loading from '../Loading';


class Cities extends Component {
  state = {
    filteredCities: []
  }

  componentDidMount() {
    this.props.getCities()

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      filteredCities: nextProps.cities
    })
  }

  filterCities = valueInput => {
    let resultFilter = this.props.cities
    resultFilter = resultFilter.filter(cities => {
      let name = cities.name.toLowerCase();
      return name.startsWith(valueInput);
    });
    this.setState({
      filteredCities: resultFilter
    });
  };

  handleChange = e => {
    this.filterCities(e.target.value.toLowerCase());
  };

  render() {
    const { filteredCities } = this.state;
    return (
      <div className="row m-0 p-0">
        <div className="col-12 p-0">
          <label htmlFor="filter">Filter by City name: </label>
          <input
            placeholder="Example: Rome"
            className="text-center CityInput"
            id="filter"
            onChange={this.handleChange}
          />
          <ul className="mx-0 mt-4 mb-2 p-0">
            {this.props.loading ? (
              <Loading></Loading>

            ) : filteredCities.length === 0 ?
                <h5 className='text-center'>City not found</h5>
                : (
                  <div className="CityListItem text-center m-1">
                    {filteredCities
                      .sort((a, b) => {
                        if (a.name > b.name) {
                          return 1;
                        }
                        if (a.name < b.name) {
                          return -1;
                        }
                        return 0;
                      })
                      .map(city => {
                        return (
                          <Link to={`/cities/${city.country}/${city.name}`} key={city._id}>
                            <img
                              src={city.url}
                              alt={city.name}
                              className="imageList"
                            />
                            <h5>{city.name}</h5>
                          </Link>
                        );
                      })}
                  </div>
                )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cityReducer.cities,
    loading: state.cityReducer.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCities: () => dispatch(getAllCities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);

