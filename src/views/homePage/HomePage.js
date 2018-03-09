/**
 * Created by zhaojuntong on 2018/1/23.
 */
import React, { Component } from 'react'
import Header from '../../components/homePage/Header'
import Banner from 'components/homePage/Banner'
import CarefulSelect from 'components/homePage/carefulSelect'
import AroundStore from 'components/homePage/aroundStore'
import PullToRefresh from 'rmc-pull-to-refresh'
class HomePage extends Component {
  constructor () {
    super()
    this.state={refreshing: false}
  }
  render () {
    return (
      <div className="homePage">
        <Header/>
        <div className="main">
          {/*<PullToRefresh*/}
            {/*style={{ height: 400, overflow: 'auto' }}*/}
            {/*direction="up"*/}
            {/*refreshing={this.state.refreshing}*/}
            {/*onRefresh={() => {*/}
              {/*this.setState({ refreshing: true });*/}
              {/*setTimeout(() => {*/}
                {/*this.setState({ refreshing: false });*/}
              {/*}, 1000);*/}
            {/*}}*/}
            {/*indicator={{ deactivate: '上拉' }}*/}
          {/*>*/}
            <div>
              <Banner/>
              <CarefulSelect/>
              <AroundStore/>
            </div>
          {/*</PullToRefresh>*/}
        </div>
      </div>
    )
  }
}

export default HomePage
