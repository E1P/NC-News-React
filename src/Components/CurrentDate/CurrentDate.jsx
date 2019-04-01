import React, { Component } from "react";

export default class CurrentDate extends Component {
  state = {
    date: Date.now()
  };

  render() {
    return <div className="current-date">{Date.now()}</div>;
  }
}
