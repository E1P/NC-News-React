import React from "react";
import { MainArticles, TopArticles } from "../index";

export default class MainPage extends React.Component {
  componentDidMount() {
    const { handleTopicChange, topic } = this.props;
    handleTopicChange(topic);
  }

  componentDidUpdate(prevProps) {
    const { handleTopicChange, topic } = this.props;
    if (topic !== prevProps.topic) handleTopicChange(topic);
  }

  render() {
    const { topic, username, p, handleAllLoaded } = this.props;
    const limit = topic ? 1 : 3;
    return (
      <div className="main-page">
        <TopArticles topic={topic} p={p} limit={limit} />
        <MainArticles topic={topic} p={p} username={username} handleAllLoaded={handleAllLoaded} />
      </div>
    );
  }
}
