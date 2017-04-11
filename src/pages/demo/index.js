import autobind from 'autobind-decorator'
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {alertAction} from 'src/redux/actions/demoActions'
import styles from './index.scss'

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
        const {alertAction} = this.props
        alertAction("this is action info.");
    }

    render() {
        return (
            <h2 onClick={this.handleAlert} className={styles.red}>this is demo and the color is red.</h2>
        )
    }
}
export default App;
