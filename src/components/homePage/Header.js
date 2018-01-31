/**
 * Created by zhaojuntong on 2018/1/25.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from 'components/search/Search'
import LocationOn from 'material-ui/svg-icons/communication/location-on'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import { grey600 } from 'material-ui/styles/colors'
class Header extends Component {
  render () {
    return (
      <div className="header-search">
        <Link to="/" className="location">
          <LocationOn  color={ grey600 }/>
          <span>梧桐岛</span>
          <KeyboardArrowRight/>
        </Link>
        <Search/>
      </div>
    )
  }
}

export default Header