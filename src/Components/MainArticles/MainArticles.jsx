import React, { Component } from "react";
import { Loader, ArticlePreview, Sorter, FormButton } from "../index";
import { Link } from "@reach/router";
import { getArticles } from "../../data-api/api";

export default class MainArticles extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "desc",
    isLoaded: false,
    total_count: 0
  };

  componentDidMount() {
    const { sort_by, order } = this.state;
    const { topic, p } = this.props;
    const params = { topic, sort_by, order, p };
    this.fetchArticles(params, false);
    this.setState({ allLoaded: false });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("updating", this.state.articles.length);
    const { sort_by, order } = this.state;
    const { topic, p, handleAllLoaded } = this.props;
    const topicChanged = prevProps.topic !== topic;
    const orderSortChanged = prevState.sort_by !== sort_by || prevState.order !== order;
    const pageLoadNeeded = p !== prevProps.p;
    const params = { topic, sort_by, order, p };
    if (topicChanged && pageLoadNeeded) {
      this.fetchArticles(params, false);
      handleAllLoaded(true);
    }
    if (topicChanged || orderSortChanged) {
      this.fetchArticles(params, false);
      handleAllLoaded(false);
    }
    if (pageLoadNeeded && !topicChanged) {
      this.fetchArticles(params, true);
    }
  }

  fetchArticles = (params, scrollEvent) => {
    const { handleAllLoaded } = this.props;
    getArticles(params).then(({ articles, total_count }) => {
      this.setState(prevState => {
        if (scrollEvent) {
          articles = prevState.articles.concat(articles);
          if (articles.length === total_count && articles.length > 0) handleAllLoaded(true);
          return { articles, isLoaded: true, total_count };
        }
        return { articles, isLoaded: true, total_count, p: 1 };
      });
    });
  };

  handleSorting = value => {
    this.setState(value);
  };

  render() {
    const { articles } = this.state;
    const { username } = this.props;
    if (!articles.length)
      return (
        <div className="loader-position-container">
          <Loader />
        </div>
      );
    return (
      <div className="main-articles">
        <div className="toolbar">
          <Sorter handleSorting={this.handleSorting} />
          <FormButton className="button" type="article" username={username} />
        </div>

        {articles.map(article => {
          return (
            <Link to={`/articles/${article.article_id}`} key={article.article_id}>
              <ArticlePreview article={article} />
            </Link>
          );
        })}
        <div className="fade-spacer" />
      </div>
    );
  }
}
