import React from "react";
import { Link } from "@reach/router";

export default function FormButton(props) {
  const { type, article_id, user, sender } = props;
  return user ? (
    <div className="button">
      <Link to={`/form/${type}/${article_id || ""}`}>
        <div>Post {`${type}`}</div>
      </Link>
    </div>
  ) : (
    <Link to="/sign-in" sender={sender}>
      <p>Sign in to post article</p>
    </Link>
  );
}
