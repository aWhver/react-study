/**
 * Created by zhaojuntong on 2018/1/31.
 */
import React, { Component } from 'react'
import RateStar from 'components/star/star'
class AroundStore extends Component {
  render () {
    return (
      <div className="around-store-container">
        <h3>附近商家</h3>
        <div className="around-store">
          <ul>
            <li className="around-store-item">
              <figure><img src="" alt=""/></figure>
              <div>
                <h4>川香小炒</h4>
                <p>
                  <span className="rate">
                    <RateStar rate={4}/>
                  </span>
                  <span className="sell">
                    月售336
                  </span>
                  <span className="distance fr">
                    1.4km
                  </span>
                  <span className="time fr">
                    42分钟
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default AroundStore