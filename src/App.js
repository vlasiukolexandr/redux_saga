import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/Hello.js';
import Async from './components/async/';
import GetPictures from './components/GetPictures/GetPictures.js';
import {List, ListItem} from 'material-ui/List';

class App extends Component {
  state = {
    element: 0
  }
  renderElement = (el) => {
    switch (el) {
      case 1:
        return <Hello/>
      case 2:
        return <GetPictures/>
      case 3:
        return <Async />
      default:
        return ''

    }
  }
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome Sagas study</h1>
      </header>
      <List>
        <ListItem primaryText="Counter" onClick={() => this.setState({element: 1})}/>
        <ListItem primaryText="Get Pictures" onClick={() => this.setState({element: 2})}/>
        <ListItem primaryText="Async operations" onClick={() => this.setState({element: 3})}/>
      </List>
      {this.renderElement(this.state.element)}
    </div>);
  }
}

export default App;
