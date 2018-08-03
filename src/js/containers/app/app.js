import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import globalVariables from 'globalVariables'

import styles from './app.css'

/** CONTAINERS **/
import { ActionButton, Menu, Popup } from '../../containers'

class App extends React.Component {

  static contextTypes = {
    store: PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (<div className={styles['app-wrapper'] + ' theme-' + globalVariables.ACTIVE_THEME_NAME + ' ' +
    (this.props.showPopup ? styles.overflow : '')}>
      {this.props.openActions ? <Menu/> : null}
      <ActionButton/>
      {this.props.showPopup ? <Popup/> : null}
    </div>)
  }
}

function mapStateToProps (state) {
  return {
    openActions: state.actionButton.openActions,
    showPopup: state.popup.showPopup
  }
}

App = connect(mapStateToProps)(App)

export default App