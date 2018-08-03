import React from "react";
import {connect} from 'react-redux';

/** ACTIONS **/
import { popupActions } from '../../actions';

/** COMPONENTS **/
import {Popup} from '../../components';

const mapStateToProps = (state, ownProps) => ({
  content: state.popup.content
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closePopup: () => {
    dispatch(popupActions.hidePopup());
  }
});

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(Popup);

export default PopupContainer;