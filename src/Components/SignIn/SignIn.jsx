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
    const { user, handleAuth } = this.props;
    const { hidden } = this.state;
    return (
      <div className="sign-in">
        <div className={hidden ? "burger-container" : "burger-container twist"} onClick={this.handleDropdownClick}>
          <div className="burger-element" />
          <div className="burger-element" />
          <div className="burger-element" />
        </div>
        <div className={hidden ? "burger-dropdown-hidden" : "burger-dropdown-hidden burger-dropdown"}>
          {!user ? (
            <Link to="/sign-in" className="burger-dropdown-item">
              Sign in
            </Link>
          ) : (
            <Fragment>
              <p>Signed in as: {user.username}</p>
              <Link className="burger-dropdown-item" to="/sign-in">
                Profile
              </Link>
              <button className="button" onClick={() => handleAuth("")}>
                Sign out
              </button>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}
