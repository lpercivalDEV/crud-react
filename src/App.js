import React, {Component} from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      status: " Unchecked"
    };

    this.updateCheck = this.updateCheck.bind(this);
  }

  updateCheck() {
    this.setState({
      checked: !this.state.checked,
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
          type="checkbox"
          onChange={this.updateCheck}
          defaultChecked={this.state.checked}
        />

        <p>
          Status:
            {
              this.state.checked
                ? <h3>Checked</h3>
                : <h3>Unchecked</h3>
            }
        </p>

      </div>
    );
  }
}

export default App;
