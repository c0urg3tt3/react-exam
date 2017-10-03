import { combineReducers } from 'redux'

import formReducer from './form'
import listReducer from './list'

export default combineReducers({
  form: formReducer,
  list: listReducer
})
