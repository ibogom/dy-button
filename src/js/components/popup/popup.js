import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './popup.css'

export default class Popup extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    closePopup: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
  }

  render () {
    const content = (this.props.content ? this.props.content : 'No content available')
    return (<div className={styles['popup-dy']}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className="close" onClick={this.props.closePopup}/>
          <div dangerouslySetInnerHTML={{__html: content}}/>
          {this.props.children}
        </div>
      </div>
    </div>)
  }
}