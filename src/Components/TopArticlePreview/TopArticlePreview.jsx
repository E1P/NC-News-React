import React, { Component } from "react";
import { Link } from "@reach/router";

export default class TopArticlePreview extends Component {
  render() {
    const { article } = this.props;
    return (
      <Link to={`/articles/${article.article_id}`}>
        <div className="top-article">{article.title}</div>
      </Link>
    );
  }
}
