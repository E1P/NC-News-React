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

  handleVote = currentVote => {
    const { article_id } = this.state.article;
    const voteBody = { inc_votes: currentVote };
    incrementVote(article_id, voteBody);
  };

  render() {
    const { votes, topic, title, body, author, created_at, comment_count } = this.state.article;
    const { article_id } = this.props;
    const { handleDelete } = this;
    return (
      <div>
        <FormButton article_id={article_id} type="comment" />
        <Voter votes={votes} handleVote={this.handleVote} />
        <section className="article">
          <h6>{topic}</h6>
          <h5>{title}</h5>
          <p>{body}</p>
          <p>Author: {author}</p>
          <p>{created_at}</p>
          <p>Comments so far: {comment_count}</p>
          <p>{votes} people like this article.</p>
          <DeleteButton handleDelete={handleDelete} />
        </section>
        <Comments article_id={article_id} />
      </div>
    );
  }
}
