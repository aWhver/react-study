/**
 * Created by zhaojuntong on 2018/1/30.
 */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { getCarefulSelect } from 'api/homePage'
class CarefulSelect extends Component {
  constructor () {
    super()
    this.state = {
      carefulSelect: []
    }
  }
  componentWillMount () {
    getCarefulSelect({limit: 6}).then(response => {
      this.setState({
        carefulSelect: response.data.carefulSelect
      })
    })
  }
  render () {
    return (
      <div className="careful-select">
        <h3>为你优选</h3>
        <div className="careful-select-list">
          {this.state.carefulSelect.map(item => (
            <SelectItem item={item} key={item.id}/>
          ))}
        </div>
      </div>
    )
  }
}

class SelectItem extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="careful-select-item">
        <Link to={`/store/${this.props.item.id}`}>
          <div>
            <img src={this.props.item.avatar1} alt=""/>
            <img src={this.props.item.avatar} alt=""/>
          </div>
          <p className="name">{this.props.item.name}</p>
        </Link>
      </div>
    )
  }
}

export default CarefulSelect