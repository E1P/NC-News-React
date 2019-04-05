import React from "react";
import { DeleteButton, Voter } from "../index";

export default function SingleComment(props) {
  const { comment_id, author, body, votes } = props.comment;
  const { handleDelete, handleVote } = props;
  return (
    <div className="comment">
      {" "}
      <h5>Author: {author}</h5>
      <p>{body}</p>
      <Voter votes={votes} handleVote={handleVote} />
      <DeleteButton id={comment_id} handleDelete={handleDelete} />
    </div>
  );
}
