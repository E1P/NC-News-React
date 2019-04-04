import React, { Component } from "react";
import { getCommentsByArticleId, deleteComment } from "../../data-api/api";
import DeleteButton from "../DeleteButton/DeleteButton";

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

  render() {
    return (
      <section>
        <h4>User comments >>></h4>
        {this.state.comments.map(comment => {
          const { comment_id, author, body } = comment;
          return (
            <div key={comment_id} className="comment">
              {" "}
              <h5>Author: {author}</h5>
              <p>{body}</p>
              <DeleteButton id={comment_id} handleDelete={this.handleDelete} />
            </div>
          );
        })}
        <div className="fade-spacer" />
      </section>
    );
  }
}
