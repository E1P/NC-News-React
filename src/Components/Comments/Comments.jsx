import React, { Component } from "react";
import { getCommentsByArticleId } from "../../data-api/api";
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

  handleDelete = () => {
    const { article_id } = this.props;
    getCommentsByArticleId(article_id).then(({ comments }) => {
      this.setState({ comments });
    });
  };

  render() {
    return (
      <section>
        <h4>Article critiques >>></h4>
        {this.state.comments.map(comment => {
          return (
            <div key={comment.comment_id} className="comment">
              {" "}
              <h5>Author: {comment.author}</h5>
              <p>{comment.body}</p>
              <DeleteButton type="comment" id={comment.comment_id} />
            </div>
          );
        })}
      </section>
    );
  }
}
