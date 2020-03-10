import React, {Component} from 'react';
import PropTypes from 'prop-types';
import newLogo from './rumymommy.jpg';

const propTypes = {
  name: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  title: PropTypes.any
};

const defaultProps = {
  name: ' Default name of App'
}

class MyComponent extends Component {
  componentWillUpdate(nextProps, nextState){
    console.log(this.props, this.state, nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState){
    console.log(this.props, this.state, prevProps, prevState);
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  render() {
    const {title, name, onClick} = this.props;

    return (
      <div className="component">
        <h1>Section Title: {title}</h1>
        <h2>Name:{name}</h2>
        <img className= "App-logo" src = {newLogo} alt= "new baby yoda logo" />
        <div  className="clickMe" onClick={onClick}>Click me!</div>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
