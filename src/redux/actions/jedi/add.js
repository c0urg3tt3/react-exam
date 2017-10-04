
import axios from 'axios'

import {
  JEDI_ADD_REQUEST,
  JEDI_ADD_SUCCESS,
  JEDI_ADD_ERROR
} from './'

export default function addJedi (name) {
  return (dispatch) => {
    dispatch({
      type: JEDI_ADD_REQUEST
    })

    return axios
      .post('http://localhost:3001/jedi', { name })
      .then(
        res => {
          dispatch({
            type: JEDI_ADD_SUCCESS,
            payload: res.data
          })
        },
        err => {
          dispatch({
            type: JEDI_ADD_ERROR,
            errorMessage: err.toString()
          })
        }
      )
  }
}
