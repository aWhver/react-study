/**
 * Created by zhaojuntong on 2018/3/8.
 */
import React, { Component } from 'react'
import { plusCount, minusCount } from 'actions/index'

class Count extends Component {
  plus(foodId, foodPrice) {
    this.props.dispatch(plusCount(foodId, foodPrice))
  }
  minus(foodId, foodPrice) {
    this.props.dispatch(minusCount(foodId, foodPrice))
  }
  render () {
    const {counts, foodId, foodPrice} = this.props
    return (
      <div className="count">
        <span className="plus btn" onClick={this.plus.bind(this, foodId, foodPrice)}>+</span>
        <span className="num">{counts.quality[foodId] || 0}</span>
        <span className="minus btn" onClick={this.minus.bind(this,foodId, foodPrice)}>-</span>
      </div>
    )
  }
}

export default Count