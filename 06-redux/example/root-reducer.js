import { combineReducers } from 'redux'

import counterReducer from './counter/reducer'
import eventsReducer from './events/reducer'

export default combineReducers({
  counter: counterReducer,
  events: eventsReducer
})
