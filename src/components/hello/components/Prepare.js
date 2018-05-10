import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import Buttons from './Buttons.js'
import {connect} from 'react-redux'

class Prepare extends Component {
  action = type => this.props.dispatch({type})

  render() {
    return (<div className="Hello">
      <Buttons value={this.props.counter}
        onIncrement={() => this.action('INCREMENT')}
        onDecrement={() => this.action('DECREMENT')}
        onIncrementAsync={() => this.action('INCREMENT_ASYNC')}/>
    </div>)
  }
}

export default connect(state => state)(Prepare);
