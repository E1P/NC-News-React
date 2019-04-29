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
    p: 1,
    total_count: 0
  };

  componentDidMount() {
    const { sort_by, order, p } = this.state;
    const { topic } = this.props;
    const params = { topic, sort_by, order, p };
    this.fetchArticles(params, false);
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order, p } = this.state;
    const { topic } = this.props;
    const propsChanged = prevProps.topic !== topic;
    const orderSortChanged = prevState.sort_by !== sort_by || prevState.order !== order;
    const pageLoadNeeded = p !== prevState.p;
    const params = { topic, sort_by, order, p };
    if (propsChanged || orderSortChanged) this.fetchArticles(params, false);
    if (pageLoadNeeded) {
      this.fetchArticles(params, true);
    }
  }

  fetchArticles = (params, scrollEvent) => {
    getArticles(params).then(({ articles, total_count }) => {
      this.setState(prevState => {
        if (scrollEvent) {
          articles = prevState.articles.concat(articles);
          return { articles, isLoaded: true, total_count };
        }
        return { articles, isLoaded: true, total_count, p: 1 };
      });
    });
  };

  handleSorting = value => {
    this.setState(value);
  };

  handleScroll = event => {
    event.persist();
    const { p, total_count, isLoaded } = this.state;
    const remainder = total_count - p * 10;
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    const scrollNearEnd = scrollTop >= scrollHeight - clientHeight - 50;
    if (scrollNearEnd && remainder >= 0 && isLoaded) {
      console.log("Loading next page...");
      const pageToLoad = p + 1;
      this.setState({ p: pageToLoad, isLoaded: false });
    }
  };

  render() {
    const { articles } = this.state;
    const { username } = this.props;
    if (!articles.length)
      return (
        <div>
          <Loader />
        </div>
      );
    return (
      <div className="main-articles">
        <div className="toolbar">
          <Sorter handleSorting={this.handleSorting} />
          <FormButton type="article" username={username} />
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
