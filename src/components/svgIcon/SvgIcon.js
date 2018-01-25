/**
 * Created by zhaojuntong on 2018/1/25.
 */
import React, { Component } from 'react'

class SvgIcon extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <svg className="svg-icon" aria-hidden="true">
        <use xlinkHref={`#icon-${this.props.iconClass}`}>

        </use>
      </svg>
    )
  }
}

export default SvgIcon