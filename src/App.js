import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

const title = ({ text }) => <div>{ text }</div>

class App extends Component {
  state = {
    on: false
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          <li>h</li>
          <li>h</li>
          <li>h</li>
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="button-state">{this.state.on ? 'Yes!' : '!No' }</p>
        <button onClick={() => this.setState({ on: true })}>Click</button>
        <title text='some string' />
      </div>
    );
  }
}

export class Link extends Component {
  render(){
    return this.props.hide ? null :  <a href={this.props.address}>Click</a>
  }
}

export default App;
