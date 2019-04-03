import React, { Component } from "react";
import { navigate } from "@reach/router";
import { deleteArticle, deleteComment } from "../../data-api/api";

export default class DeleteButton extends Component {
  handleClickDelete = () => {
    const { type, id } = this.props;
    const path = `${type}s/${id}`;
    type === "article" &&
      deleteArticle().then(({ article }) => {
        navigate(`/articles/${article[path]}`);
      });
    type === "comment" &&
      deleteComment().then(() => {
        navigate(`/articles/${path}`);
      });
  };

  render() {
    return (
      <div className="button" onClick={this.handleClickDelete}>
        Delete
      </div>
    );
  }
}
