import {GET_ITINERARY} from '../constants'

const fetchData = (itineraryCities) => {
    return {
        // siempre el que importe
        type: GET_ITINERARY,
        itineraryCities
    }
}

export const getItinerary= (pathname) => (dispatch) => {
    fetch(pathname, {method: "GET"})
    .then(response => response.json())
    .then(itineraryCities => { 
        dispatch(fetchData(itineraryCities))
    })
    .catch(err => console.log(err));
}