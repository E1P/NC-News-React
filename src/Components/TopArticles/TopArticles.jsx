import React, { Component } from "react";
import { getArticles } from "../../data-api/api";
import { TopArticlePreview } from "../index";

export default class TopArticles extends Component {
  state = {
    topArticles: []
  };

  fetchTopArticles = () => {
    const params = {
      sort_by: "comment_count",
      limit: 3
    };
    getArticles(params).then(({ articles }) => {
      this.setState({ topArticles: articles });
    });
  };

  componentDidMount() {
    this.fetchTopArticles();
  }

  render() {
    return (
      <div className="top-articles">
        {this.state.topArticles.map(article => {
          return <TopArticlePreview key={article.article_id} article={article} />;
        })}
      </div>
    );
  }
}
