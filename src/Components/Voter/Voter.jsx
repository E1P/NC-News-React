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
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div className="voter">
        {voteChange !== 1 && (
          <button className="button" onClick={() => this.handleClick(+1)}>
            Up
          </button>
        )}{" "}
        {votes + voteChange}{" "}
        {voteChange !== -1 && (
          <button className="button" onClick={() => this.handleClick(-1)}>
            Down
          </button>
        )}
      </div>
    );
  }
}
