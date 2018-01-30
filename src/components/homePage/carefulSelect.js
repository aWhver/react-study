/**
 * Created by zhaojuntong on 2018/1/30.
 */
import React, { Component } from 'react'

import '../../mock/index'
import { getCarefulSelect } from 'api/homePage'
class CarefulSelect extends Component {
  componentWillMount () {
    getCarefulSelect({limit: 6})
  }
  render () {
    return (
      <div className="careful-select">
        <h3>为你优选</h3>
        <div className="careful-select-list">
          <div className="careful-select-item">
            <div><img src="" alt=""/></div>
            <p className="name">fsdfsd</p>
          </div>
          <div className="careful-select-item">
            <div><img src="" alt=""/></div>
            <p className="name">fsdfsd</p>
          </div>
          <div className="careful-select-item">
            <div>
              <img src="" alt=""/>
              <img src="" alt=""/>
            </div>
            <p className="name">fsdfsd</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CarefulSelect