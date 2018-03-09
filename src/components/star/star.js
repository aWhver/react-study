/**
 * Created by zhaojuntong on 2018/1/31.
 */
import React, { Component } from 'react'
import Star from 'material-ui/svg-icons/toggle/star-border'
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
          item = <Star className="star" key={index} color={ yellow800 }/>
        } else {
          item = <Star key={index} className="star"/>
        }
        return item
      })
    )
  }
}
export default RateStar