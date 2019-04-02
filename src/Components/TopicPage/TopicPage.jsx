import React, { Component } from "react";
import TopArticlePreview from "../TopArticlePreview/TopArticlePreview";
import { MainArticles } from "..";

export default class TopicPage extends Component {
  render() {
    return (
      <div>
        <TopArticlePreview />
        <MainArticles />
      </div>
    );
  }
}
