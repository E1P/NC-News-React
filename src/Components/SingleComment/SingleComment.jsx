import React from "react";
import { DeleteButton } from "../index";

export default function SingleComment(props) {
  const { comment_id, author, body } = props.comment;
  const handleDelete = props;
  return (
    <div key={comment_id} className="comment">
      {" "}
      <h5>Author: {author}</h5>
      <p>{body}</p>
      <DeleteButton id={comment_id} handleDelete={handleDelete} />
    </div>
  );
}
