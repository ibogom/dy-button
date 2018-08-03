import { popupTypes } from '../actions';

const defaultState = {
  showPopup:false,
  content: null
};

const popup = (state = defaultState, action) => {
  switch (action.type) {
    case popupTypes.SHOW_POPUP:
      return Object.assign({}, state, {
        showPopup: true,
        content: action.content
      });
    case popupTypes.HIDE_POPUP:
      return Object.assign({}, state, defaultState);
    default:
      return state;
  }
};

export default popup;