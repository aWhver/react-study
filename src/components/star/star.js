/**
 * Created by zhaojuntong on 2018/1/31.
 */
import React, { Component } from 'react'
import Star from 'material-ui/svg-icons/toggle/star'
import { yellow800 } from 'material-ui/styles/colors'
const starArr = new Array(5).fill(null)
class RateStar extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      starArr.map((item, index) => {
        if (index + 1 <= this.props.rate) {
          item = <Star className="star" color={ yellow800 }/>
        } else {
          item = <Star className="star"/>
        }
        return item
      })
    )
  }
}
export default RateStar