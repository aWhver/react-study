/**
 * Created by zhaojuntong on 2018/1/23.
 */
import React, { Component } from 'react'
import Header from '../../components/homePage/Header'
import Banner from 'components/homePage/Banner'
import CarefulSelect from 'components/homePage/carefulSelect'
class HomePage extends Component {
  render () {
    return (
      <div className="homePage">
        <Header/>
        <div className="main">
          <Banner/>
          <CarefulSelect/>
        </div>
      </div>
    )
  }
}

export default HomePage
