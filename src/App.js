import React, {Component} from 'react';
import MyComponent from './MyComponent';
import logo from './babyYoda.jpeg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: " Initial name",
      status: " off"
    };

    this.updateName = this.updateName.bind(this);
    this.updateStatus= this.updateStatus.bind(this);
  }

  updateName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  updateStatus(event){
    this.setState( {
      status: event.target.value,
      checked: true
    })
  }

  render() {

    return (
      <div className="App">
        <MyComponent
          title={this.state.title}
          name={this.state.name}
          onClick={this.onClick}
        />

        <input
          onChange={this.updateName}
          value={this.state.name}
        />

        <input
          type="checkbox"
          onChange={this.updateStatus}
          checked={this.state.checked}
         />
         <p
         onChange={this.updateStatus}
         >
          Status: {this.state.status}
         </p>
      </div>
    );
  }
}

export default App;
