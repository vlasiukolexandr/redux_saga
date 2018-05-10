import React, {Component} from 'react'
import './Hello.css'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import Buttons from './components/Buttons.js'
import reducer from '../../store/reducers/counter'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

class Hello extends Component {
  state = {
    counter: 0
  }

  componentDidMount() {
    sagaMiddleware.run(rootSaga)
  }

  action = type => {
    store.dispatch({type})
    this.setState({counter: store.getState()})
  }

  render() {
    return (<div className="Hello">
      <Buttons value={this.state.counter} onIncrement={() => this.action('INCREMENT')} onDecrement={() => this.action('DECREMENT')} onIncrementAsync={() => this.action('INCREMENT_ASYNC')}/>
    </div>);
  }
}

export default Hello;
