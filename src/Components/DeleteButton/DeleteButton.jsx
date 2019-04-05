import React from "react";

export default function DeleteButton(props) {
  const { id, handleDelete } = props;
  return (
    <button className="button" onClick={() => handleDelete(id)}>
      Delete
    </button>
  );
}
