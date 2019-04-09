import React, { Component } from "react";
import { getArticleById, incrementVote, deleteArticle } from "../../data-api/api";
import { Comments, FormButton, DeleteButton, Voter } from "../index";
import { navigate } from "@reach/router/lib/history";

export default class SingleArticle extends Component {
  state = {
    article: {},
    articleIsLoaded: false
  };

  componentDidMount() {
    this.fetchArticleById();
  }

  fetchArticleById = () => {
    const { article_id } = this.props;
    getArticleById(article_id).then(({ article }) => {
      this.setState({ article, articleIsLoaded: true });
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
    const { articleIsLoaded } = this.state;
    const { article_id, username } = this.props;
    const { handleDelete } = this;
    return (
      articleIsLoaded && (
        <div className="article-container">
          <FormButton article_id={article_id} type="comment" username={username} />
          {username !== author && <Voter votes={votes} handleVote={this.handleVote} username={username} />}
          <section className="article">
            <h6>{topic}</h6>
            <h5>{title}</h5>
            <p>{body}</p>
            <p>Author: {author}</p>
            <p>{created_at.slice(0, 10)}</p>
            <p>Comments so far: {comment_count}</p>
            <p>{votes} people like this article.</p>
            {author === username && <DeleteButton handleDelete={handleDelete} />}
          </section>
          <Comments article_id={article_id} username={username} />
        </div>
      )
    );
  }
}
