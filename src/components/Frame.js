import React, { Component } from 'react'

class Frame extends Component {
  render() {
    const children = this.props.children;
    return (
      <div>
        <h1>this is frame.</h1>
        {children}
      </div>
    )
  }
}
export default Frame