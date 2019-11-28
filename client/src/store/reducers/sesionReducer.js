import { SESION_ON, SESION_OFF } from '../constants'

// inicia el state con los datos que le definimos
const initialState = {
  success: false,
  token: ''
};

// se tiene que pasar una const con el state y el action, al state se le define el initialState para que no marque undefiend
export default (state = initialState, action) => {
  switch (action.type) {
    case SESION_ON:
      return {
        ...state,
        sesion: action.payload.sesion,
        token: action.payload.token
      }
    case SESION_OFF:
      return {
        ...state,
        sesion: action.sesion,
        token: ''
      }
    default:
      return state;
  }
};