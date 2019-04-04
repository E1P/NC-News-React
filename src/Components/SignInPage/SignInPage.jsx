import React, { Component, Fragment } from "react";
import { getSingleUser } from "../../data-api/api";
import { navigate } from "@reach/router";

export default class SignInPage extends Component {
  state = {
    username: "",
    password: "",
    badInput: false
  };

  componentDidMount() {}

  componentDidUpdate() {}

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { handleAuth } = this.props;
    const { username } = this.state;
    getSingleUser(username).then(({ user }) => {
      if (user) {
        handleAuth(user);
        navigate("/");
      } else {
        this.setState({ badInput: true });
      }
    });
  };

  render() {
    const { user } = this.props;
    const { badInput } = this.state;
    return user ? (
      <p>User profile...</p>
    ) : (
      <Fragment>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">User: </label>
          <input required id="username" onChange={this.handleChange} />
          <label htmlFor="password">Password</label>
          <input required type="password" id="password" onChange={this.handleChange} />
          <button class="button" type="submit">
            Sign in
          </button>
        </form>
        {badInput && <p>User not found</p>}
      </Fragment>
    );
  }
}
