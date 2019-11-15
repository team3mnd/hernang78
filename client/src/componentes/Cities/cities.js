import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import './cities.css';
import { Link } from 'react-router-dom';

class Cities extends Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      filteredCities: []
    };
  }

  fetchCities() {
    fetch('/cities')
      .then(response => response.json())
      .then(cities => this.setState({ cities, filteredCities: cities }))
      .catch(err => console.log(err));

  }

  componentDidMount() {
    this.fetchCities();
  }

  filterCities = (cityFilter) => {
    let filteredCities = this.state.cities

    filteredCities = filteredCities.filter((city) => {
      let cityName = city.name.toLowerCase()
      if (cityName.startsWith(cityFilter)) {
        return cityName.indexOf(
          cityFilter.toLowerCase()) !== -1
      }
    })

    this.setState({
      filteredCities
    })
  }

  handleChange = (e) => {
    this.filterCities(e.target.value)
  }

  cityList() {
    return <ul className="mx-0 mt-4 mb-2 p-0">
      {this.state.filteredCities.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }).map(city => {
        let link = "/" + city.name;
        return <li className="CityListItem text-center m-1" key={city.name}>
          <Link to={link} className="">
            <button className="CountryBtn">
              {city.name} >>> {city.country}
            </button>
          </Link>
        </li>
      })}
    </ul>
  }

  noCity() {
    if (this.state.filteredCities.length === 0) {
      return <div className="NoCityDiv"> <h5 className="text-center align-self-center">Sorry, no city found :/</h5> </div>
    }
  }

  render() {

    return (
      <div className="row m-0 p-0">
        <div className="col-12 p-0">
          <label htmlFor="filter">Filter by City name: </label>
          {/* <input type="text" id="filter"
            onChange={this.handleChange} /> */}
          <DebounceInput
            placeholder="ej: Rome"
            className="text-center CityInput"
            id="filter"
            ref="CityInput"
            minLength={1}
            debounceTimeout={500}
            onChange={this.handleChange}
          />
          {/* <h2>Cities</h2> */}
          {/* this.cityList() */}
          <ul className="mx-0 mt-4 mb-2 p-0">
            {this.state.filteredCities.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              // a must be equal to b
              return 0;
            }).map(city => {
              let linkCity = "/" + city.name;
              return <li className="CityListItem text-center m-1" key={city.name}>
                <Link to={linkCity} className="">
                  <button className="CountryBtn">
                    {city.name} >>> {city.country}
                  </button>
                </Link>
              </li>
            })}
          </ul>
          {this.noCity()}
        </div>
      </div>
    );
  }
}

export default Cities;
