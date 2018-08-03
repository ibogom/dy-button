import React from "react";
import {connect} from 'react-redux';

/** ACTIONS **/
import { popupActions } from '../../actions'

/** COMPONENTS **/
import { Menu } from '../../components'

const mapDispatchToProps = (dispatch, ownProps) => ({
  openText(content){
    dispatch(popupActions.showPopup(content))
  },
  openVideo(content){
    dispatch(popupActions.showPopup(content))
  }
});

const MenuContainer = connect(null, mapDispatchToProps)(Menu);

export default MenuContainer;