import React, { Component } from "react";
import { getCommentsByArticleId } from "../../data-api/api";

export default class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const { article_id } = this.props;
    getCommentsByArticleId(article_id).then(({ comments }) => {
      this.setState({ comments }, () => console.log(this.state));
    });
  }

  render() {
    return (
      <section>
        <h4>Article critiques >>></h4>
        {this.state.comments.map(comment => {
          return (
            <div key={comment.comment_id}>
              {" "}
              <h5>Author: {comment.author}</h5>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </section>
    );
  }
}
