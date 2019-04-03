import React, { Component } from "react";
import { getArticleById } from "../../data-api/api";
import { Comments, FormButton, DeleteButton } from "../index";

export default class SingleArticle extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    this.fetchArticleById();
  }

  fetchArticleById = () => {
    const { article_id } = this.props;
    getArticleById(article_id).then(({ article }) => {
      this.setState({ article });
    });
  };

  render() {
    const { article } = this.state;
    const { article_id } = this.props;
    return (
      <div>
        <FormButton article_id={article_id} type="comment" />
        <section className="article">
          <h6>{article.topic}</h6>
          <h5>{article.title}</h5>
          <p>{article.body}</p>
          <p>Author: {article.author}</p>
          <p>{article.created_at}</p>
          <p>Comments so far: {article.comment_count}</p>
          <p>{article.votes} people like this article.</p>
          <DeleteButton id={article_id} type="article" />
        </section>
        <Comments article_id={article_id} />
      </div>
    );
  }
}
