import React, { Fragment } from "react";
import { Link } from "@reach/router";

export default class SignIn extends React.Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  render() {
    const { username, handleAuth, hidden, handleDropdownClick } = this.props;
    return (
      <div className="sign-in">
        <div className={hidden ? "burger-container" : "burger-container twist"} onClick={handleDropdownClick}>
          <div className="burger-element" />
          <div className="burger-element" />
          <div className="burger-element" />
        </div>
        <div className={hidden ? "burger-dropdown-hidden" : "burger-dropdown-hidden burger-dropdown"}>
          {!username ? (
            <Link to="/sign-in" className="burger-dropdown-item" onClick={handleDropdownClick}>
              Sign in
            </Link>
          ) : (
            <Fragment>
              <p className="burger-dropdown-item">
                Signed in as:
                {username}
              </p>
              <div className="burger-dropdown-item">
                {/* <Link to="/sign-in">Profile</Link> */}
                <button
                  className="button"
                  onClick={() => {
                    handleAuth("");
                    handleDropdownClick();
                  }}
                >
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
