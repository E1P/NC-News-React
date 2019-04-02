import React, { Component } from "react";
import TopArticlePreview from "../TopArticlePreview/TopArticlePreview";
import { MainArticles } from "..";
import { getArticles } from "../../data-api/api";

export default class TopicPage extends Component {
  state = {
    articles: [],
    topArticle: {}
  };

  componentDidMount() {
    this.fetchArticles();
    this.fetchTopArticle();
  }

  componentDidUpdate() {}

  fetchArticles = () => {
    const { topic } = this.props;
    const params = { topic };
    getArticles(params).then(({ articles }) => {
      this.setState({ articles });
    });
  };

  fetchTopArticle = () => {
    const { topic } = this.props;
    const params = { topic, sort_by: "comment_count", limit: 1 };
    getArticles(params).then(({ articles: [topArticle] }) => {
      this.setState({ topArticle });
    });
  };

  render() {
    const { articles, topArticle } = this.state;
    return (
      <div>
        <TopArticlePreview article={topArticle} />
        {<MainArticles articles={articles} />}
      </div>
    );
  }
}
