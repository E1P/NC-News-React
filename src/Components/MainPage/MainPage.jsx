import React from "react";
import { MainArticles, TopArticles } from "../index";

export default class MainPage extends React.Component {
  componentDidMount() {}

  componentDidUpdate(prevProps) {
    const { handleTopicChange, topic } = this.props;
    if (topic !== prevProps.topic) handleTopicChange(topic);
  }

  render() {
    const { topic, username } = this.props;
    const limit = topic ? 1 : 3;
    return (
      <div className="main-page">
        <TopArticles topic={topic} limit={limit} />
        <MainArticles topic={topic} username={username} />
      </div>
    );
  }
}
