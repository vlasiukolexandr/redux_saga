import React, {Component} from 'react'
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

class Buttons extends Component {

  render = () => {
    const style = {
    height: 250,
    width: 250,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

  return (<Paper style={style} zDepth={1} >
    <FlatButton onClick={this.props.onIncrementAsync}>
      Increment after 1 second
    </FlatButton>
    <FlatButton onClick={this.props.onIncrement}>
      Increment
    </FlatButton>
    <FlatButton onClick={this.props.onDecrement}>
      Decrement
    </FlatButton>
    <div style={{marginTop: '20px'}}>
      Counter: {this.props.value}
    </div>
  </Paper>)
  }
}

export default Buttons
