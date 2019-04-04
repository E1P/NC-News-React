import React, { Component } from "react";
import { getArticleById, incrementVote, deleteArticle } from "../../data-api/api";
import { Comments, FormButton, DeleteButton, Voter } from "../index";
import { navigate } from "@reach/router/lib/history";

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

  handleDelete = () => {
    const { article_id } = this.state.article;
    deleteArticle(article_id);
    navigate("/");
  };

  handleVote = vote => {
    incrementVote();
  };

  render() {
    const { article } = this.state;
    const { article_id } = this.props;
    const { handleDelete } = this;
    return (
      <div>
        <FormButton article_id={article_id} type="comment" />
        <Voter id={article_id} handleVote={this.handleVote} />
        <section className="article">
          <h6>{article.topic}</h6>
          <h5>{article.title}</h5>
          <p>{article.body}</p>
          <p>Author: {article.author}</p>
          <p>{article.created_at}</p>
          <p>Comments so far: {article.comment_count}</p>
          <p>{article.votes} people like this article.</p>
          <DeleteButton handleDelete={handleDelete} />
        </section>
        <Comments article_id={article_id} />
      </div>
    );
  }
}
