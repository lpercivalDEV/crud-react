import React, {Component} from 'react';
import MyComponent from './MyComponent';
import logo from './babyYoda.jpeg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: " Initial title",
      name: " Initial name"
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      title: " Keonda - the new wave for connection",
      name: " New App name"
    });
  }

  render() {

    return (
      <div className="App">
        <MyComponent
          title={this.state.title}
          name={this.state.name}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
