import React from "react";
import { MainArticles, TopArticles } from "../index";

export default function MainPage(props) {
  const { topic, username } = props;
  const limit = topic ? 3 : 3;
  return (
    <div className="main-page">
      <TopArticles topic={topic} limit={limit} />
      <MainArticles topic={topic} username={username} />
    </div>
  );
}
