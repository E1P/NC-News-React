import React from "react";
import { Link } from "@reach/router";

export default function SignIn(props) {
  const { user, handleAuth } = props;
  return user ? (
    <div>
      <p>Signed in as: {user.username}</p>
      <Link className="sign-in" to="/sign-in">
        Profile
      </Link>
      <button onClick={() => handleAuth("")}>Sign out</button>
    </div>
  ) : (
    <Link className="sign-in" to="/sign-in">
      Sign In
    </Link>
  );
}
