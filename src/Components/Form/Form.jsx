import React, { Component, Fragment } from "react";
import { postNewArticle, postNewComment } from "../../data-api/api";
import { navigate } from "@reach/router";

export default class Form extends Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { type, article_id } = this.props;
    type === "article" &&
      postNewArticle().then(({ article }) => {
        navigate(`/articles/${article.article_id}`);
      });
    type === "comment" &&
      postNewComment().then(() => {
        navigate(`/articles/${article_id}`);
      });
  };

  render() {
    const { type } = this.props;
    return (
      <div>
        {type} Form{" "}
        <div className="button" onClick={() => navigate("/")}>
          Cancel
        </div>
        <form className="form">
          {type === "article" && (
            <Fragment>
              <label htmlFor="topic">Topic: </label>
              <input required id="topic" onChange={this.handleChange} />
              <label htmlFor="title">Title: </label>
              <input required id="title" onChange={this.handleChange} />
              <label htmlFor="body">Scribblings: </label>
            </Fragment>
          )}
          <textarea required id="body" onChange={this.handleChange} rows="10" cols="30" />
          <button onSubmit={this.handleSubmit} className="button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
