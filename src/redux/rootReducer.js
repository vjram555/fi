import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import channelReducer from './channels/channelReducer'

const rootReducer = combineReducers({
  user: userReducer,
  channel: channelReducer
})

export default rootReducer
