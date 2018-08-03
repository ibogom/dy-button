import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './action.button.css'

import { Button } from '../../components'

export default class ActionButton extends Component {

  static propTypes = {
    openActions: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.props.onClick(!this.props.openActions)
  }

  render () {
    return (<Button buttonStyle={styles['action-button-dy']} onClick={this.handleClick}/>)
  }
}