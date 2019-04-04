import React from "react";

export default class Voter extends React.Component {
  state = {
    voteChange: 0
  };

  render() {
    const { handleVote, votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div className="voter">
        <button className="button" onClick={() => handleVote(+1)}>
          Up
        </button>{" "}
        {votes + voteChange}{" "}
        <button className="button" onClick={() => handleVote(-1)}>
          Down
        </button>
      </div>
    );
  }
}

// Change to class with modified vote in state
