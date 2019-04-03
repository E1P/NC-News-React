import React from "react";
import { Link } from "@reach/router";

export default function FormButton(props) {
  const { type, article_id } = props;

  return (
    <div className="button">
      <Link to={`/form/${type}/${article_id || ""}`}>
        <div>Post {`${type}`}</div>
      </Link>
    </div>
  );
}
