/**
 * Created by DELL on 2018/2/25.
 */
import React, { Component } from 'react'
import CountContainer from 'container/CountContainer'
import ShopCar from 'components/shopCar/ShopCar'
class Store extends Component {
  constructor (props) {
    super(props)
    this.state = { isShowClass : '' }
  }
  static defaultProps = {
    foodList: []
  }
  show () { this.setState({isShowClass: 'active'}) }
  hide () { this.setState({isShowClass: ''}) }
  render () {
    return (
      <div className={"store fixedPage "+this.state.isShowClass}>
        <div className="topBar" onClick={() => {this.hide()}}></div>
        <div className="storeInfo">
          <figure>
            <img src={this.props.storeInfo.avatar} alt=""/>
          </figure>
          <div>
            <h2>{this.props.storeInfo.name}</h2>
            <p className="impressWall">
              <span>{this.props.storeInfo.impressionWall}</span>
            </p>
          </div>
        </div>
        <div className="menu">
          {this.props.foodList.map(item => {
            return (
              <div className="menu-item" key={item.id}>
                <p className="price">{item.price}</p>
                <CountContainer foodId={item.id} foodPrice={item.price}/>
              </div>
            )
          })}
        </div>
        <ShopCar sendPrice={this.props.storeInfo.sendPrice} shippingFee={this.props.storeInfo.shippingFee}/>
      </div>
    )
  }
}


export default Store