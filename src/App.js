import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/Hello.js';
import {List, ListItem} from 'material-ui/List';

class App extends Component {
  state = {
    element: 0
  }
  renderElement = (el) => {
    switch (el) {
      case 1:
        return <Hello/>
      default:
        return ''

    }
  }
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
        <List>
          <ListItem primaryText="Counter" onClick={()=>this.setState({element: 1})}/>
        </List>
        {this.renderElement(this.state.element)}
    </div>);
  }
}

export default App;
