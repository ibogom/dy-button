import { combineReducers } from 'redux'
import actionButton from './action.button'
import popup from './popup'

const AppReducers = combineReducers({
  actionButton,
  popup
})

export default AppReducers