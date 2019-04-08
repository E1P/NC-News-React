import React from "react";
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
    // const { user, handleAuth } = this.props;
    const { hidden } = this.state;
    return (
      <div className="sign-in">
        <div className="burger-container" onClick={this.handleDropdownClick}>
          <div className="burger-element" />
          <div className="burger-element" />
          <div className="burger-element" />
          {/* <div className={hidden ? "burger-dropdown-hidden" : "burger-dropdown"} onClick={this.handleDropdownClick}>
            <div className="burger-menu" />
          </div> */}
        </div>
        <div className={hidden ? "burger-dropdown-hidden" : "burger-dropdown"}>
          <Link to="/sign-in" class="burger-dropdown-item">
            Sign in
          </Link>
        </div>
      </div>
    );
  }
}

/*   return user ? (
    <div>
      <p>Signed in as: {user.username}</p>
      <Link className="sign-in" to="/sign-in">
        Profile
      </Link>
      <button className="button" onClick={() => handleAuth("")}>
        Sign out
      </button>
    </div>
  ) : (
    <Link className="sign-in" to="/sign-in">
      Sign In
    </Link>
  ); */
