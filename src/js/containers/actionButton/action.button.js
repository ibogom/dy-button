import React from "react";
import {connect} from 'react-redux';

/** ACTIONS **/
import { buttonActions } from '../../actions'

/** COMPONENTS **/
import { ActionButton } from '../../components'

const mapStateToProps = (state, ownProps) => ({
  openActions: state.actionButton.openActions
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick(status){
      dispatch(buttonActions.open(status))
    }
});

const ActionButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ActionButton);

export default ActionButtonContainer;