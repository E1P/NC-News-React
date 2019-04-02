import React, { Component } from "react";
import { Button, Loader } from "../../Components";
import { Link } from "@reach/router";
import { getArticles } from "../../data-api/api";

export default class MainArticles extends Component {
  state = {
    articles: [],
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

  componentDidUpdate(props, state) {
    const params = { topic: this.props.topic, sort_by: this.state.sort_by, order: this.state.order };
    if (props.topic !== this.props.topic || state.sort_by !== this.state.sort_by || state.order !== this.state.order) this.fetchArticles(params);
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <div className="main-articles">
        {this.state.articles.map(articlePreview => {
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
