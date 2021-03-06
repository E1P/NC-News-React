import React, { Component } from "react";
import { getCommentsByArticleId, deleteComment, incrementVote } from "../../data-api/api";
import { SingleComment } from "../index";

export default class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const { article_id } = this.props;
    getCommentsByArticleId(article_id).then(({ comments }) => {
      this.setState({ comments });
    });
  }

  handleDelete = id => {
    const comments = this.state.comments.filter(comment => {
      return comment.comment_id !== id;
    });
    this.setState({ comments });
    deleteComment(id);
  };

  handleVote = currentVote => {
    const { article_id } = this.props;
    const voteBody = { inc_votes: currentVote };
    incrementVote(article_id, voteBody);
  };

  render() {
    const { username, topic } = this.props;
    return (
      <section className="comments-container">
        <h4>Comments</h4>
        {this.state.comments.map(comment => {
          return (
            <SingleComment
              key={comment.comment_id}
              comment={comment}
              handleDelete={this.handleDelete}
              handleVote={this.handleVote}
              username={username}
              topic={topic}
            />
          );
        })}
        <div className="fade-spacer" />
      </section>
    );
  }
}
