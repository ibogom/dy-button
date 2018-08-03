import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './menu.css'

import { Button } from '../../components'

export default class ActionButton extends Component {

  static propTypes = {
    openVideo: PropTypes.func.isRequired,
    openText: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = {
      activeButton: null
    }
  }

  handleClick (type) {
    this.setActiveButton(type)
    this.delegateAction(type)
  }

  setActiveButton (activeButton) {
    this.setState({
      activeButton
    })
  }

  delegateAction (type) {
    switch (type) {
      case 'video':
        this.showVideo()
        break
      case 'editText':
        this.showText()
        break
      default:
        return false
    }
  }

  showVideo () {
    this.props.openVideo('<iframe width="560" height="315" ' +
      'src="https://www.youtube.com/embed/GdiLtwEYD_0?autoplay=1" ' +
      'frameborder="0" ' +
      'allow="autoplay; encrypted-media" allowfullscreen>' +
      '</iframe>')
  }

  showText () {
    this.props.openText('<p>Some test text</p>')
  }

  render () {
    return (<div className={styles['menu-dy']}>
      <Button buttonStyle={this.state.activeButton === 'video' ? 'btn-dy active' : null}
              onClick={this.handleClick.bind(this, 'video')}>
        <p>Boost Revenue</p>
      </Button>
      <Button buttonStyle={this.state.activeButton === 'editContent' ? 'btn-dy active' : null}
              onClick={this.handleClick.bind(this, 'editContent')}>
        <p>Personalize Site</p>
      </Button>
      <Button buttonStyle={this.state.activeButton === 'editText' ? 'btn-dy active' : null}
              onClick={this.handleClick.bind(this, 'editText')}>
        <p>Getting Started</p>
      </Button>
    </div>)
  }
}