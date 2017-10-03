
import axios from 'axios'

import {
  JEDI_FETCH_REQUEST,
  JEDI_FETCH_SUCCESS,
  JEDI_FETCH_ERROR
} from './'

export default function fetchJedi () {
  return (dispatch) => {
    dispatch({
      type: JEDI_FETCH_REQUEST
    })

    return axios.get('http://localhost:3001/jedi')
      .then(
        res => {
          dispatch({
            type: JEDI_FETCH_SUCCESS,
            payload: res.data.reverse(),
          })
        },
        err => {
          dispatch({
            type: JEDI_FETCH_ERROR,
            errorMessage: err.toString()
          })
        }
      )
  }
}
