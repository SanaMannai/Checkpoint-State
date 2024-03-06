import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
        <p style={{ fontStyle: 'italic', marginTop: '20px', color: '#888', marginLeft:'20px' }}>
            Time since mount: {this.state.timeSinceMount} seconds</p>
    );
  }
}

export default Timer;