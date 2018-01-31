/**
 * Created by zhaojuntong on 2018/1/23.
 */
import React, { Component } from 'react'
import Header from '../../components/homePage/Header'
import Banner from 'components/homePage/Banner'
import CarefulSelect from 'components/homePage/carefulSelect'
import AroundStore from 'components/homePage/aroundStore'
class HomePage extends Component {
  render () {
    return (
      <div className="homePage">
        <Header/>
        <div className="main">
          <Banner/>
          <CarefulSelect/>
          <AroundStore/>
        </div>
      </div>
    )
  }
}

export default HomePage
