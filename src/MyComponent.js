import React, {Component} from 'react';

import newLogo from './rumymommy.jpg';

class MyComponent extends Component {
  render() {
    return (
      <div className="component">
        <h1>Title: {this.props.title}</h1>
        <h2>Name: {this.props.name}</h2>
        <img src = {newLogo} alt= "new baby yoda logo" />
      </div>
    );
  }
}

export default MyComponent;
