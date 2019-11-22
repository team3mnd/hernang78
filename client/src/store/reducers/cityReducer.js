import {GET_CITIES} from '../constants'


const initialState = {
  cities: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return {...state, cities : action.cities};
    default:
      return state;
  }
};

