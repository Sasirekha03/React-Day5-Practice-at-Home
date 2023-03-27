import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'lamNEO'
    };
    console.log('Constructor called');
  }

  componentWillMount() {
    console.log('Component Will MOUNT!');
  }

  componentDidMount() {
    console.log('Component Did MOUNT!');
  }

  componentWillReceiveProps(newProps) {
    console.log('Component Will Receive Props!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should Component Update!');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did UPDATE!');
  }

  componentWillUnmount() {
    console.log('Component Will UNMOUNT!');
  }

  handleClick = () => {
    this.setState({
      msg: 'Welcome to React'
    });
  };

  render() {
    console.log('Render called');
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Lifecycle;