import React, { Component } from "react";

export default class CurrentDate extends Component {
  state = {
    date: "getting time..."
  };

  render() {
    return <div className="current-date">{this.state.date}</div>;
  }

  componentDidMount() {
    this.setState({
      date: Date().slice(0, 25)
    });
    this.timerID = setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: Date().slice(0, 25)
    });
  }
}
