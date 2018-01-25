/**
 * Created by zhaojuntong on 2018/1/23.
 */
import React, { Component } from 'react'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import ActionHome from 'material-ui/svg-icons/action/home'
import Description from 'material-ui/svg-icons/action/description'
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
// import {grey900, yellow500} from 'material-ui/styles/colors'

import history from 'router/history'

class BottomNav extends Component {
  state = {
    selectedIndex : 0,
    /*routeObj: {
      0: {
        path: '/homePage',
        iconColor: yellow500,
        color: grey900
      },
      1: {
        path: '/order',
        iconColor: '#333',
        color: '#333'
      },
      2: {
        path: '/profile',
        iconColor: '#333',
        color: '#333'
      }
    }*/
  }

  changeRoute (index) {
    this.setState({selectedIndex: index})

    const routeObj = {
      0: '/homePage',
      1: '/order',
      2: '/profile',
    }
    history.push(routeObj[index])
    /*for (let [k, v] of Object.entries(this.state.routeObj)) {
      if (+k === index) {
        console.log(k);
        console.log(index)
        v.color = grey900
        v.iconColor = yellow500
        console.log(this.state.routeObj)
        history.push(v.path)
      } else {
        v.color = '#333'
        v.iconColor = '#333'
      }
    }*/
  }
  render () {
    return (
      <Paper zDepth={1} className="bottom-navigation">
        <BottomNavigation selectedIndex = {this.state.selectedIndex}>
          <BottomNavigationItem label='首页' icon={<ActionHome/>} onClick={() => this.changeRoute(0)} />
          <BottomNavigationItem label='订单' icon={<Description/>} onClick={() => this.changeRoute(1)} />
          <BottomNavigationItem label='我的' icon={<AccountCircle/>} onClick={() => this.changeRoute(2)} />
        </BottomNavigation>
      </Paper>
    )
  }
}

/*class Label extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <span style={{color:this.props.color}}>{this.props.text}</span>
    )
  }
}*/

export default BottomNav
