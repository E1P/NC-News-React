import React, { Component } from "react";
import { Loader, ArticlePreview } from "../../Components";
import { Link } from "@reach/router";
import { getArticles } from "../../data-api/api";

export default class MainArticles extends Component {
  state = {
    articles: [],
    sort_by: "",
    order: "",
    isLoading: true
  };

  fetchArticles = params => {
    getArticles(params).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  };

  componentDidMount() {
    const params = { topic: this.props.topic, sort_by: this.state.sort_by, order: this.state.order };
    this.fetchArticles(params);
  }

  componentDidUpdate(prevProps, prevState) {
    const propsChanged = prevProps.topic !== this.props.topic;
    const stateChanged = prevState.sort_by !== this.state.sort_by || prevState.order !== this.state.order;
    const params = { topic: this.props.topic, sort_by: this.state.sort_by, order: this.state.order };
    if (propsChanged || stateChanged) this.fetchArticles(params);
  }

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
