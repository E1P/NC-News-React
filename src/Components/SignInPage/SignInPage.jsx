import React, { Component, Fragment } from "react";
import { getSingleUser } from "../../data-api/api";
import { navigate } from "@reach/router";

export default class SignInPage extends Component {
  state = {
    username: "",
    password: "",
    disabled: false
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
    getSingleUser(username)
      .then(({ user }) => {
        handleAuth(user);
        navigate("/");
      })
      .catch(err => console.log("User not found"));
  };

  render() {
    const { user, handleAuth } = this.props;
    const { disabled } = this.state;
    return (
      <div className="form">
        <div className="form-spacer" />
        {user ? (
          <Fragment>
            <p>User profile...</p>
            <button className="button" onClick={() => handleAuth("")}>
              Sign out
            </button>
          </Fragment>
        ) : (
          <form className="form-inputs" onSubmit={this.handleSubmit}>
            <p>
              <label htmlFor="username">Username: </label>
              (use "E1P")
            </p>
            <div className="form-spacer" />
            <input required id="username" onChange={this.handleChange} />
            <div className="form-spacer" />
            <p>
              <label htmlFor="password">Password: </label>(anything!{" "}
              <span role="img" aria-label="lock & key emoji">
                🔐
              </span>
              )
            </p>
            <div className="form-spacer" />
            <input required type="password" id="password" onChange={this.handleChange} />
            <div className="form-spacer" />
            <button disabled={disabled} className="button" type="submit">
              Sign in
            </button>
          </form>
        )}
      </div>
    );
  }
}
