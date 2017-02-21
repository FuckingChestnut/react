import autobind from 'autobind-decorator'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { alertAction } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    state
  }
}
const mapDispatchToProps = {
  alertAction
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  @autobind
  handleAlert() {
    const { alertAction } = this.props
    alertAction("parameter_1", "parameter_2");
  }

  render() {
    return (
      <h2 onClick={this.handleAlert}>this is app.</h2>
    )
  }
}
export default App;
