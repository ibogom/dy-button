import * as popupTypes from './popup.types'

export function showPopup(content) {
  document.body.classList.add('fixed');
  return {
    type: popupTypes.SHOW_POPUP,
    content
  }
};

export function hidePopup() {
  document.body.classList.remove('fixed');
  return {
    type: popupTypes.HIDE_POPUP
  }
};