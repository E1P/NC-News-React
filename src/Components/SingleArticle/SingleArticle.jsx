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
    this.props.handleAllLoaded(false);
  }

  fetchArticleById = () => {
    const { article_id, handleTopicChange } = this.props;
    getArticleById(article_id)
      .then(({ article }) => {
        this.setState({ article, articleIsLoaded: true }, () => handleTopicChange(this.state.article.topic));
      })
      .catch(err => console.log("Article fetch error: ", err));
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
        <div className="article-single">
          <div className={`article-container ${topic}`}>
            <section className="article-body">
              <h4>{title}</h4>
              <p>{body}</p>
            </section>
            <section className="article-details">
              <p>By: {author}</p>
              <p>{created_at.slice(0, 10)}</p>
              <p>Comments: {comment_count}</p>
              <p>Votes: {votes}</p>
              {author === username && <DeleteButton handleDelete={handleDelete} />}
              {username !== author && <Voter votes={votes} handleVote={this.handleVote} username={username} />}
              <FormButton article_id={article_id} type="comment" username={username} />
            </section>
          </div>
          <Comments article_id={article_id} username={username} topic={topic} />
        </div>
      )
    );
  }
}
