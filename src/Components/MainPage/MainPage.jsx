import React from "react";
import { MainArticles, TopArticles } from "../index";

export default function MainPage(props) {
  console.log(props);
  const topic = props.topic ? props.topic : null;
  const limit = topic ? 1 : 3;
  return (
    <div>
      <TopArticles topic={topic} limit={limit} />
      <MainArticles topic={topic} />
    </div>
  );
}
