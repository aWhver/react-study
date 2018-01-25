/**
 * Created by zhaojuntong on 2018/1/23.
 */
import React, { Component } from 'react'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
class HomePage extends Component {
  render () {
    return (
      <div className="homePage">
        <Header/>
        <div className="main">
          <Banner/>
        </div>
      </div>
    )
  }
}

export default HomePage
