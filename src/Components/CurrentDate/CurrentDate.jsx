import React, { Component } from "react";

export default class CurrentDate extends Component {
  state = {
    date: 0
  };

  render() {
    return <div className="current-date">{this.state.date}</div>;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: Date.now()
    });
  }
}
