import {GET_CITIES} from '../constants'

// inicia el state con los datos que le definimos
const initialState = {
  cities: []
};

// se tiene que pasar una const con el state y el action, al state se le define el initialState para que no marque undefiend
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      // return Object.assign({}, state, action.cities);
      return {... state, cities : action.cities};
    default:
      return state;
  }
};

