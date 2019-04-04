import React, { Component } from "react";
import { getSingleUser } from "../../data-api/api";
import { navigate } from "@reach/router";

export default class SignInPage extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {}

  componentDidUpdate() {}

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    getSingleUser(username).then(({ user }) => {
      navigate("/");
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="username">User: </label>
        <input required id="username" onChange={this.handleChange} />
        <label htmlFor="password">Password</label>
        <input required type="password" id="password" onChange={this.handleChange} />
        <button type="submit">Sign in</button>
      </form>
    );
  }
}
