/**
 * Created by zhaojuntong on 2018/1/31.
 */
import React, { Component } from 'react'
import RateStar from 'components/star/star'
import { getAroundStore } from 'api/homePage'
import Store from 'views/store/Store'
class AroundStore extends Component {
  constructor () {
    super()
    this.state = {
      aroundStore: [],
      storeInfo: {}
    }
  }
  componentWillMount () {
    getAroundStore().then(response => {
      const aroundStore = response.data.aroundStore.map((item, index) => {
        if (item.distance >= 1000) {
          item.distance = (item.distance/1000).toFixed(2) + 'km'
        } else {
          item.distance = item.distance + 'm'
        }
        return item
      })
      this.setState({
        aroundStore: aroundStore
      })
    })
  }
  goStore (item) {
    this.setState({
      storeInfo: item
    })
    this.refs.storeDetail.show()
  }
  render () {
    return (
      <div className="around-store-container">
        <h3>附近商家</h3>
        <div className="around-store">
          <ul>
            {this.state.aroundStore.map((item, index) => (
              <AroundStoreItem storeInfo={item} key={index} onStoreInfo={this.goStore.bind(this,item)}/>
            ))}
          </ul>
        </div>
        <Store ref="storeDetail" storeInfo={this.state.storeInfo} foodList={this.state.storeInfo.foodList}/>
      </div>
    )
  }
}
class AroundStoreItem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.onStoreInfo(this.props.storeInfo)
  }
  render () {
    return (
      <li className="around-store-item" onClick={this.handleClick}>
        <figure><img src={this.props.storeInfo.avatar1} alt=""/></figure>
        <div>
          <h4>{this.props.storeInfo.name}</h4>
          <p>
            <span className="rate">
              <RateStar rate={this.props.storeInfo.rate}/>
            </span>
            <span className="sell">
              月售{this.props.storeInfo.sell}
            </span>
            <span className="distance fr">
              {this.props.storeInfo.distance}
            </span>
            <span className="time fr">
              {this.props.storeInfo.time}分钟
            </span>
          </p>
          <p>
            <span>起送  &yen;{this.props.storeInfo.sendPrice}</span>|  <span>配送  &yen;{this.props.storeInfo.shippingFee}</span>
          </p>
          <p>
            <span>{this.props.storeInfo.type}</span>
          </p>
        </div>
      </li>
    )
  }
}
export default AroundStore