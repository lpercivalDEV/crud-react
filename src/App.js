import React, {Component} from 'react';
import MyComponent from './MyComponent';
import logo from './babyYoda.jpeg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "App title"
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      title: "Keonda - the new wave for connection"
    });
  }

  render() {
    const list = [
      "item 1",
      "item 2",
      "Another item"
    ];

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <h2>
          {
            list.map(item => {
              return (
                <div onClick={this.onClick}>{item}</div>
              );
            })
          }
        </h2>
        <div onClick={this.onClick}>Click here!</div>
        <img src = {logo} alt= "baby yoda logo" />
        <MyComponent />
      </div>
    );
  }
}

export default App;
