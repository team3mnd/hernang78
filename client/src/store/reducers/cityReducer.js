import {GET_CITIES, IS_FETCHING} from '../constants'

// inicia el state con los datos que le definimos
const initialState = {
  cities: [],
  isFetching: false
};

// se tiene que pasar una const con el state y el action, al state se le define el initialState para que no marque undefiend
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: action.cities
      }
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload  
      }
    default:
      return state;
  }
};

