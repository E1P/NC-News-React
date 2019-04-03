import React from "react";
import { Link } from "@reach/router";

export default function FormButton(props) {
  const { type } = props;
  return (
    <div>
      <Link to={`/form/${type}`}>
        <div>Post {`${type}`}</div>
      </Link>
    </div>
  );
}
