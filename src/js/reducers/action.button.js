import { buttonTypes } from '../actions'

const defaultState = {
  openActions: false
}

const actionButton = (state = defaultState, action) => {
  switch (action.type) {
    case buttonTypes.OPEN_ACTIONS:
      return Object.assign({}, state, {
        openActions: action.openActions
      })
    default:
      return state
  }
}

export default actionButton