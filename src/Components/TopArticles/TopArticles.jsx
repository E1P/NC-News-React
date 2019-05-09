import React, { Component } from "react";
import { getArticles } from "../../data-api/api";
import { TopArticlePreview /* FormButton */ } from "../index";

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
    const { topArticles } = this.state;
    if (!topArticles.length)
      return (
        <div className="top-articles">
          <p>Loading...</p>
        </div>
      );
    return (
      topArticles.length && (
        <div className="top-articles">
          <h5 style={{ padding: "5px" }}>Most popular</h5>
          {topArticles.map(article => {
            return <TopArticlePreview key={article.article_id} article={article} />;
          })}
        </div>
      )
    );
  }
}
