import {GET_CITIES} from '../constants'

const fetchDataCities = (cities) => {
    return {
        // siempre el que importe
        type: GET_CITIES,
        cities
    }
}

export const getAllCities = () => dispatch => {
    fetch("/cities", {method: "GET"})
    .then(response => response.json())
    .then(cities => { 
        dispatch(fetchDataCities(cities))
        // console.log("enAction: ", cities)
        // return { type: GET_CITIES, cities } 
    })
    .catch(err => console.log(err));
}

