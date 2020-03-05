import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onClick() {
    alert("dog!");
  }

  onMouseEnter() {
    alert("cat")
  }

  onChange(event) {
    alert(event.target.value)
  }

  render() {
    const title = "React CRUD app - Keonda draft yay!";

    const anotherTitle = "Keonda - the new wave of connection"

    const list = [
      "item 1",
      "item 2",
      "Another item"
    ];

    return (
      <div className="App">
        <h1>
          {
            true ? anotherTitle : title
          }
        </h1>
        <h2>
          {
            list.map(item => {
              return (
                <div onClick={this.onClick}>{item}</div>
              );
            })
          }
        </h2>
        <h2>
          {
            list.map(item => {
              return (
                <div onMouseEnter={this.onMouseEnter}>{item}</div>
              );
            })
          }
        </h2>
        <input onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
