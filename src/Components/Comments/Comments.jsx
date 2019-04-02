import React, { Component } from "react";
import { getCommentsByArticleId } from "../../data-api/api";

export default class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const { article_id } = this.props;
    getCommentsByArticleId(article_id).then(({ comments }) => {
      this.setState({ comments }, () => console.log(this.state));
    });
  }

  render() {
    return <div>Article critiques >>></div>;
  }
}
