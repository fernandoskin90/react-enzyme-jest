import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

const title = ({ text }) => <div>{ text }</div>

class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    lifeCycle: ''
  }
  componentDidMount() {
    this.setState({ lifeCycle: 'componentDidMount' })
  }
  componentWillReceiveProps() {
    this.setState({ lifeCycle: "componentWillReceiveProps" });
  }

  handleStrings(str) {
    return str ? true : false
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <h3 className={this.state.mainColor}>Hello!</h3>
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
        <h2>{this.state.input}</h2>
        <input type="text" onChange={(e) => this.setState({input: e.target.value})}/>
        <p className="lifeCycle">{this.state.lifeCycle}</p>
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
