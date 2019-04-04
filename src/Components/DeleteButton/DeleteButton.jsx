import React, { Component } from "react";
import { navigate } from "@reach/router";
import { deleteArticle, deleteComment } from "../../data-api/api";

export default class DeleteButton extends Component {
  handleClickDelete = () => {
    const { type, id } = this.props;
    type === "article" &&
      deleteArticle(id).then(() => {
        navigate(`/`);
      });
    type === "comment" && deleteComment(id);
  };

  render() {
    return (
      <div className="button" onClick={this.handleClickDelete}>
        Delete
      </div>
    );
  }
}
