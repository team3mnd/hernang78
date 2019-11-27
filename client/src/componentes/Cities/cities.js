
import React, { Component } from "react";
import { getAllCities } from "../../store/actions/citiesActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./cities.css";

import Loading from "../Loading";
import NavBar from "../Nav/nav";

class Cities extends Component {
  state = {
    filteredCities: []
  };

  componentDidMount() {
    this.props.getCities();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cities !== prevProps.cities)
      this.setState({
        filteredCities: this.props.cities
      });
  }

  filterCities = valueInput => {
    let resultFilter = this.props.cities;
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
      <>
        <NavBar />
        <div className="row m-0 p-0">
          <div className="col-12 p-0">
            <div
              style={{
                textAlign: "center",
                marginTop: "25px",
                marginBottom: "25px"
              }}
            >
              <label htmlFor="filter" style={{ width: "100%" }}>
                Filter by City name:
              </label>
              <input
                style={{ width: "60%", borderRadius: "5px", padding: "6px" }}
                placeholder="Example: Rome"
                className="text-center CityInput"
                id="filter"
                onChange={this.handleChange}
              />
            </div>
            <ul className="mx-0 mt-4 mb-2 p-0">
              {this.props.loading ? (
                <Loading />
              ) : filteredCities.length === 0 ? (
                <h5 className="text-center">City not found</h5>
              ) : (
                <div className="CityListItem text-center">
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
                        <Link
                          to={`/cities/${city.country}/${city.name}`}
                          className="containerCities"
                          key={city._id}
                        >
                          <img
                            src={city.url}
                            alt={city.name}
                            className="imageList"
                          />
                          <p className="h3 texto-centrado">{city.name}</p>
                          <p className="h5 texto-abajo">{city.country}</p>
                        </Link>
                      );
                    })}
                </div>
              )}
            </ul>
          </div>
        </div>
      </>
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
