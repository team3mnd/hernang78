import { SESION_OFF, SESION_ON } from '../constants'
//import store from '../store'

const resultFetch = (data) => {
    return {
        // siempre el que importe
        type: SESION_ON,
        payload: {
          sesion: data.success,
          token: data.token
        }
    }
}

const sendFetch = async (user) => {
    let res = await fetch('/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    let data = await res.json();
    console.log(data)
    return data;
}

/* export function isFetching(value) {
    return { type: IS_FETCHING_ITINERARY, payload: value }
} */

export const getAccess = (user) => {
    //store.dispatch(isFetching(true));
    console.log('getAccess')
    return async function (dispatch) {
        try {
            const data = await sendFetch(user);
            
            //dispatch(isFetching(false));
            let dataFetched = resultFetch(data);
            
            return dispatch(dataFetched);
        } catch (err) {
            //dispatch(isFetching(false));
            console.error(err)
        }
    }
}
