import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import Prepare from './components/Prepare.js'
import reducer from '../../store/reducers/counter'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

class Hello extends Component {
  render = () => <Prepare store={store}/>
}

export default Hello;
