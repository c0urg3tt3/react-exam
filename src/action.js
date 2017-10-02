/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios'

export const FETCH_FINISH = 'FETCH_FINISH'
export const FETCH_ERROR = 'FETCH_ERROR'

export default function fetchJedi () {
  return dispatch => axios.get('http://localhost:3001/jedi')
    .then((res) => {
      dispatch({
        type: 'FETCH_FINISH',
        payload: res.data
      })
    })
    .catch(error => {
      dispatch({
        type: 'FETCH_ERROR',
        error: error.toString()
      })
    })
}
