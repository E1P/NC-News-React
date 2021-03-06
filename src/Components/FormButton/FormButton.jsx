import React from "react";
import { Link } from "@reach/router";

export default function FormButton(props) {
  const { type, article_id, username } = props;
  return username ? (
    <Link to={`/form/${type}/${article_id || ""}`}>
      <button className="button">Post {`${type}`}</button>
    </Link>
  ) : (
    <Link to="/sign-in">
      <button className="button">Sign in to post {type}</button>
    </Link>
  );
}
