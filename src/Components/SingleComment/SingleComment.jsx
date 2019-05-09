import React from "react";
import { DeleteButton, Voter } from "../index";

export default function SingleComment(props) {
  const { comment_id, author, body, votes } = props.comment;
  const { handleDelete, handleVote, username, topic } = props;
  return (
    <div className={`comment ${topic}`}>
      {" "}
      <h5>Author: {author}</h5>
      <p>{body}</p>
      {username !== author && <Voter votes={votes} handleVote={handleVote} username={username} />}
      {username === author && <DeleteButton id={comment_id} handleDelete={handleDelete} />}
    </div>
  );
}
