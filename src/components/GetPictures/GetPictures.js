import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import Pictures from './components/Pictures.js'
import reducer from '../../store/reducers/pictures'
import createSagaMiddleware from 'redux-saga'
import watchFetchDog from './sagas.js'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchFetchDog);

class GetPictures extends Component {
  render = () =>  <Pictures store={store} />
}

export default GetPictures
