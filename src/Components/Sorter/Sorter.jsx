import React from "react";

export default function Sorter(props) {
  const { handleSorting } = props;
  return (
    <div className="sorter">
      <button className="button" onClick={() => handleSorting({ sort_by: "votes" })}>
        Votes
      </button>
      <button className="button" onClick={() => handleSorting({ sort_by: "comment_count" })}>
        Comments
      </button>
      <button className="button" onClick={() => handleSorting({ sort_by: "created_at" })}>
        Date
      </button>
      <button className="button" onClick={() => handleSorting({ order: "asc" })}>
        Asc
      </button>
      <button className="button" onClick={() => handleSorting({ order: "desc" })}>
        Desc
      </button>
    </div>
  );
}
