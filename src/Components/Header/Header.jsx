import React from "react";
import CurrentDate from "../CurrentDate/CurrentDate";

export default function Header() {
  return (
    <div className="header">
      <h1>NC NEWS</h1>
      <CurrentDate />
    </div>
  );
}
