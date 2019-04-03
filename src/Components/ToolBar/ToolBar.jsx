import React from "react";
import { Link } from "@reach/router";

export default function ToolBar() {
  return (
    <div>
      <p>Sort</p>
      <Link to="/form/article">
        <div>New Article</div>
      </Link>
    </div>
  );
}
