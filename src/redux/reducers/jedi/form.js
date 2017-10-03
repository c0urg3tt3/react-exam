import {
  JEDI_ADD_REQUEST,
  JEDI_ADD_SUCCESS,
  JEDI_ADD_ERROR
} from '../../actions'

const initialState = {
  isPosting: false,
  isPostingError: false,
  postingError: ""
}

export default function formReducer (state = initialState, action) {
  switch (action.type) {
  // ADD
    case JEDI_ADD_REQUEST:
      return {
        ...state,
        isPosting: true,
        isPostingError: false
      }
    case JEDI_ADD_SUCCESS:
      return {
        ...state,
        isPosting: false
      }
    case JEDI_ADD_ERROR:
      return {
        ...state,
        isPosting: false,
        isPostingError: true,
        postingError: action.errorMessage
      }
  // DEFAULT
    default:
      return state
  }
}
