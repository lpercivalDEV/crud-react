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

  render() {
    const {title, name, onClick} = this.props;

    return (
      <div className="component">
        <div>{this.props.name}</div>
        <img className= "App-logo" src = {newLogo} alt= "new baby yoda logo" />
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
