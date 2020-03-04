import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const title = "React CRUD app - Keonda draft yay!";

    const anotherTitle = "Keonda - the new wave of connection"

    const list = [
      "item 1, ",
      "item 2, ",
      "Another item, "
    ]

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
              return item;
            })
          }
        </h2>
      </div>
    );
  }
}

export default App;
