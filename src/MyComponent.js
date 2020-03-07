import React, {Component} from 'react';

import newLogo from './rumymommy.jpg';

class MyComponent extends Component {
  render() {
    return (
      <div className="component">
        <h1>Baby Yoda</h1>
        <h2>This component was dropped into another component.</h2>
        <img src = {newLogo} alt= "new baby yoda logo" />
      </div>
    );
  }
}

export default MyComponent;
