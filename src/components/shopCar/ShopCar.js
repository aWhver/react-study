/**
 * Created by zhaojuntong on 2018/3/9.
 */
import React, { Component } from 'react'
import Cart from 'svgIcon/cart.svg'

class ShopCar extends Component {
  render () {
    const { sendPrice, shippingFee } = this.props
    return (
      <div className="shopCar">
        <div className="left">
          <div className="cartImg fl">
            <img src={Cart} alt=""/>
            <i>1</i>
          </div>
          <div className="totalPrice fl">
            <h3>&yen;3</h3>
            <p>另需配送货费&yen;{shippingFee}</p>
          </div>
        </div>
        <div className="right">
          <p>差{sendPrice}起送</p>
        </div>
      </div>
    )
  }
}
export default ShopCar