import React from "react";
import { Link } from "@reach/router";
import CurrentDate from "../CurrentDate/CurrentDate";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header-text-main">NCN</h1>
      </Link>
      <CurrentDate />
    </div>
  );
}
