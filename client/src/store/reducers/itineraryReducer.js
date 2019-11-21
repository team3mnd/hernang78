  import {GET_ITINERARY} from '../constants'

// inicia el state con los datos que le definimos
const initialState = {
  itineraryCity: []
};

// se tiene que pasar una const con el state y el action, al state se le define el initialState para que no marque undefiend
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITINERARY:
      return Object.assign({}, state, action.itineraryCities);
    default:
      return state;
  }
};