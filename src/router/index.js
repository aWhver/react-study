/**
 * Created by zhaojuntong on 2018/1/23.
 */
import React, { Component } from 'react'
import { Router, Redirect, Switch, Route } from 'react-router-dom'
import history from './history'
import HomePage from 'views/homePage/HomePage'
import Order from 'views/order/Order'
import Profile from 'views/profile/Profile'
import Store from 'views/store/Store'
const routes = [
  {path: '/homePage', component: HomePage, exact: true},
  {path: '/order', component: Order, exact: false},
  {path: '/profile', component: Profile, exact: false},
  {path: '/store/:id', component: Store, exact: false}
]

class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.component}/>
          ))}
          <Redirect to="/homePage"></Redirect>
        </Switch>
      </Router>
    )
  }
}

export default Routes
