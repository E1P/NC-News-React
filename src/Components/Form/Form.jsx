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
    const { type, article_id, username } = this.props;
    const body = { ...this.state, [type === "article" ? "author" : "namename"]: username };
    type === "article" &&
      postNewArticle(body).then(({ article }) => {
        navigate(`/articles/${article.article_id}`);
      });
    type === "comment" && postNewComment(article_id, body).then(() => navigate(`/articles/${article_id}`));
  };

  render() {
    const { type, article_id } = this.props;
    return (
      <div className="form-page">
        {type} Form{" "}
        <div className="button" onClick={() => navigate(type === "comment" ? `/articles/${article_id}` : "/")}>
          Cancel
        </div>
        <form className="form-inputs" onSubmit={this.handleSubmit} autoComplete="on">
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
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
