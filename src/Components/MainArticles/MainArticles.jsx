import React, { Component } from "react";
import { Loader, ArticlePreview, Sorter } from "../../Components";
import { Link } from "@reach/router";
import { getArticles } from "../../data-api/api";

export default class MainArticles extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "desc",
    isLoading: true
  };

  componentDidMount() {
    const params = { topic: this.props.topic, sort_by: this.state.sort_by, order: this.state.order };
    this.fetchArticles(params);
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order } = this.state;
    const { topic } = this.props;
    const propsChanged = prevProps.topic !== topic;
    const stateChanged = prevState.sort_by !== sort_by || prevState.order !== order;
    const params = { topic, sort_by, order };
    if (propsChanged || stateChanged) this.fetchArticles(params);
  }

  fetchArticles = params => {
    getArticles(params).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  };

  handleSorting = value => {
    this.setState(value);
  };

  render() {
    const { articles } = this.state;
    if (!articles.length)
      return (
        <div /* className="main-articles" */>
          <Loader />
        </div>
      );
    return (
      <div className="main-articles">
        <Sorter handleSorting={this.handleSorting} />
        {articles.map(article => {
          return (
            <Link to={`/articles/${article.article_id}`} key={article.article_id}>
              <ArticlePreview article={article} />
            </Link>
          );
        })}
      </div>
    );
  }
}
