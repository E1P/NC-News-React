import React, { Component } from "react";
import { Link } from "@reach/router";

export default class TopArticlePreview extends Component {
  render() {
    const { article } = this.props;
    return (
      <Link to={`/articles/${article.article_id}`} className={`top-article ${article.topic}`}>
        <div>{article.title}</div>
      </Link>
    );
  }
}
