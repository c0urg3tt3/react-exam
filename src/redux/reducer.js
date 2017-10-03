import { combineReducers } from 'redux'
import jediReducer from './reducers/jedi'

export default combineReducers({
  jedi: jediReducer
})
