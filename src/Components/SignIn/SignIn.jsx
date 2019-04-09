import React, { Fragment } from "react";
import { Link } from "@reach/router";

export default class SignIn extends React.Component {
  state = {
    isLoaded: false,
    hidden: true
  };

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  handleDropdownClick = () => {
    this.setState(this.state.hidden ? { hidden: false } : { hidden: true });
  };

  render() {
    const { username, handleAuth } = this.props;
    const { hidden } = this.state;
    return (
      <div className="sign-in">
        <div className={hidden ? "burger-container" : "burger-container twist"} onClick={this.handleDropdownClick}>
          <div className="burger-element" />
          <div className="burger-element" />
          <div className="burger-element" />
        </div>
        <div className={hidden ? "burger-dropdown-hidden" : "burger-dropdown-hidden burger-dropdown"}>
          {!username ? (
            <Link to="/sign-in" className="burger-dropdown-item">
              Sign in
            </Link>
          ) : (
            <Fragment>
              <p className="burger-dropdown-item">
                Signed in as:
                {username}
              </p>
              <div className="burger-dropdown-item">
                <Link to="/sign-in">Profile</Link>
                <button className="button" onClick={() => handleAuth("")}>
                  Sign out
                </button>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}
