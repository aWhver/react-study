/**
 * Created by zhaojuntong on 2018/1/24.
 */
import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SearchIcon from 'material-ui/svg-icons/action/search'
import { teal200 } from 'material-ui/styles/colors'
class Search extends Component {
  render () {
    return (
      <div className="search-container">
        <SearchIcon color={ teal200 } className="search-icon"/>
        <TextField className="search-input" name="name" placeholder="beef" underlineShow={false} inputStyle={{"textIndent": "30px"}}/>
      </div>
    )
  }
}

export default Search
