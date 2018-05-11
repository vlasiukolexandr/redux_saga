import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import rootSaga from './sagas'
import reducer from '../../store/reducers/async'

import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

class Async extends Component {
  render = () => <App store={store}/>
}
export default Async;
