/**
 * Created by zhaojuntong on 2018/1/25.
 */
import React, { Component } from 'react'
import SvgIcon from 'components/svgIcon/SvgIcon'
// import Shuiguo from 'svgIcon/shuiguo.svg'
class Banner extends Component {
  render () {
    return (
      <div className="banner">
        <div className="banner-container">
          <ul>
            <li>
              <div>
                <SvgIcon iconClass={'shuiguo'}/>
              </div>
              <span>美食</span>
            </li>
          </ul>
          <ul></ul>
        </div>
      </div>
    )
  }
}

export default Banner