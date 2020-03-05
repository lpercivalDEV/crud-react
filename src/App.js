import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onClick() {
    alert("dog!");
  }

  onMouseEnter() {
    alert("cat")
  }

  onChange(event) {
    console.log(event.target.value)
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.input.value);
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
                <div key={item}  onMouseEnter={this.onMouseEnter}>{item}</div>
              );
            })
          }
        </h2>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} ref={input => this.input = input} />
        </form>
      </div>
    );
  }
}

export default App;
