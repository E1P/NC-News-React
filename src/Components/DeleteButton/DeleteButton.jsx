import React from "react";

export default function DeleteButton(props) {
  const { id, handleDelete } = props;
  return (
    <div className="button" onClick={() => handleDelete(id)}>
      Delete
    </div>
  );
}
