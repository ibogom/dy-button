import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './button.css';

export default class Button extends Component {

  static propTypes ={
    onClick: PropTypes.func.isRequired,
    buttonStyle: PropTypes.string
  }

  constructor(props){
    super(props)
  }

  render () {
    const buttonStyles = this.props.buttonStyle || 'btn-dy';
    return (<button className={buttonStyles} onClick={this.props.onClick}>
      {this.props.children}
    </button>)
  }
}