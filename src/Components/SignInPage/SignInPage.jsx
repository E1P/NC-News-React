import React, { Component } from "react";
import { getUsers } from "../../data-api/api";

export default class SignInPage extends Component {
  state = {
    users: [],
    username: "",
    password: ""
  };

  componentDidMount() {
    getUsers().then(({ users }) => {
      console.log(users);
      this.setState({ users });
    });
  }

  componentDidUpdate() {}

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <form className="form">
        <label htmlFor="username">User: </label>
        <input required id="username" onChange={this.handleChange} />
        <label htmlFor="password">Password</label>
        <input required type="password" id="password" onChange={this.handleChange} />
        <button onSubmit={this.handleSubmit}>Sign in</button>
      </form>
    );
  }
}
