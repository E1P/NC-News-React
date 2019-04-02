import React, { Component } from "react";
import { getArticles } from "../../data-api/api";
import { TopArticlePreview } from "../index";

export default class TopArticles extends Component {
  state = {
    topArticles: []
  };

  fetchTopArticles = () => {
    const { limit, topic } = this.props;
    const params = {
      topic: topic || null,
      sort_by: "comment_count",
      limit: limit
    };
    getArticles(params).then(({ articles }) => {
      this.setState({ topArticles: articles });
    });
  };

  componentDidMount() {
    this.fetchTopArticles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.fetchTopArticles();
    }
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
