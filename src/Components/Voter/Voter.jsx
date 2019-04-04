import React from "react";

export default function Voter(props) {
  const { handleVote } = props;
  return (
    <div className="voter">
      Vote:
      <button className="button" onClick={() => handleVote()}>
        Up
      </button>
      <button className="button" onClick={() => handleVote()}>
        Down
      </button>
    </div>
  );
}
