import React, { Component } from "react";
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

  handleSubmit = () => {
    const { type, article_id } = this.props;
    return (type === "article" ? postNewArticle() : postNewComment()).then(() => {
      navigate(`/articles/${article_id}`);
    });
  };

  render() {
    const { type } = this.props;
    return (
      <div className="form">
        {type} Form <div className="button">Cancel</div>
        <form>
          <label htmlFor="topic">Topic: </label>
          <input id="topic" onChange={this.handleChange} />
          <label htmlFor="title">Title: </label>
          <input id="title" onChange={this.handleChange} />
          <label htmlFor="body">Scribblings: </label>
          <textarea id="body" onChange={this.handleChange} />
          <div onClick={this.handleSubmit} className="button">
            Submit
          </div>
        </form>
      </div>
    );
  }
}
