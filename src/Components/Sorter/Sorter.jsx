import React from "react";

export default function Sorter(props) {
  const { handleSorting } = props;
  return (
    <div>
      <button onClick={() => handleSorting("votes")}>Votes</button>
      <button onClick={() => handleSorting("comment_count")}>Comments</button>
      <button onClick={() => handleSorting("created_at")}>Date</button>
    </div>
  );
}
