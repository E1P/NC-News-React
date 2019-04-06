import React, { Component } from "react";

export default class CurrentDate extends Component {
  state = {
    date: "getting time..."
  };

  render() {
    const { date } = this.state;
    return (
      <div className="current-date">
        <div className="current-date-date">{date.slice(0, 11)}</div>
        <div className="current-date-time">{date.slice(16)}</div>
      </div>
    );
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
