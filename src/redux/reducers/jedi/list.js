import {
  JEDI_FETCH_REQUEST,
  JEDI_FETCH_SUCCESS,
  JEDI_FETCH_ERROR,
  JEDI_ADD_SUCCESS
} from '../../actions'

const initialState = {
  jedies: [],
  isFetching: false,
  isFetchingError: false,
  fetchingError: ""
}

export default function listReducer (state = initialState, action) {
  switch (action.type) {
  // FETCH
    case JEDI_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetchingError: false
      }
    case JEDI_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        jedies: [
          ...action.payload
        ]
      }
    case JEDI_FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        isFetchingError: true,
        fetchingError: action.errorMessage
      }
  // DEFAULT
    default:
      return state
  }
}
