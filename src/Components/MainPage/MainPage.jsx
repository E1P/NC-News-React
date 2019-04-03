import React from "react";
import { MainArticles, TopArticles, ToolBar } from "../index";

export default function MainPage(props) {
  const topic = props.topic;
  const limit = topic ? 1 : 3;
  return (
    <div>
      <ToolBar />
      <TopArticles topic={topic} limit={limit} />
      <MainArticles topic={topic} />
    </div>
  );
}
