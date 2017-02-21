import React, { Component } from 'react'

import { Router, Route, hashHistory } from 'react-router'

import Frame from './Frame'
import App from './App'

class Routers extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Frame}>
          <Route path="app" component={App}/>
        </Route>
      </Router>
    )
  }
}
export default Routers