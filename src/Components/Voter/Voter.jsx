import React from "react";

export default class Voter extends React.Component {
  state = {
    voteChange: 0
  };

  handleClick = vote => {
    const { handleVote } = this.props;
    const voteChange = this.state.voteChange + vote;
    this.setState({ voteChange }, () => handleVote(vote));
  };

  render() {
    const { votes, username } = this.props;
    const { voteChange } = this.state;
    return username ? (
      <div className="voter">
        {voteChange !== 1 && (
          <button className="button" onClick={() => this.handleClick(+1)}>
            Up
          </button>
        )}{" "}
        {!isNaN(votes) && votes + voteChange}{" "}
        {voteChange !== -1 && (
          <button className="button" onClick={() => this.handleClick(-1)}>
            Down
          </button>
        )}
      </div>
    ) : (
      <div className="voter-grey">
        <p>Up</p>
        {!isNaN(votes) && votes + voteChange}
        <p>Down</p>
      </div>
    );
  }
}
