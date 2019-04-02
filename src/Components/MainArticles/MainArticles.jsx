import React, { Component } from "react";
import { Loader } from "../../Components";
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
    this.fetchArticles();
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
        <div>
          <Loader />
        </div>
      );
    return (
      <div className="main-articles">
        {articles.map(articlePreview => {
          return (
            <Link to={`/articles/${articlePreview.article_id}`} key={articlePreview.article_id}>
              <section className="article-preview">
                <div>
                  <div>Votes:{articlePreview.votes}</div>
                  <div>Comments: {articlePreview.comment_count}</div>
                  <div>{articlePreview.created_at.slice(0, 10)}</div>
                </div>
                <div />
                <div>{articlePreview.title}</div>
              </section>
            </Link>
          );
        })}
      </div>
    );
  }
}
