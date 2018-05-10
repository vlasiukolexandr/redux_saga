import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import {connect} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import {fetchDog} from '../sagas.js'

class Pictures extends Component {
  render() {
    const style = {
      height: 'auto',
      width: 'auto',
      margin: 20,
      textAlign: 'center',
      display: 'inline-block'
    }

    return (
      <Paper style={style} zDepth={1}>
        <FlatButton onClick={() => this.props.dispatch({type: 'FETCHED_DOG'})}>Show Dog</FlatButton>
        {
          this.props.loading
            ? <p>Loading...</p>
            : this.props.error
              ? <p>Error, try again</p>
              : <p><img src={this.props.url} /></p>
        }
    </Paper>);
  }
}

export default connect(state => state)(Pictures);
