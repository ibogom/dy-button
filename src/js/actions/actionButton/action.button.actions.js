import * as buttonTypes from './action.button.types'

export function open (status) {
  return {
    type: buttonTypes.OPEN_ACTIONS,
    openActions: status
  }
}