import React from "react";
import { MainArticles, TopArticles /* FormButton */ } from "../index";

export default function MainPage(props) {
  const { topic } = props;
  const limit = topic ? 1 : 3;
  return (
    <div>
      {/* <div className="toolbar">
        <FormButton type="article" />
      </div> */}
      <TopArticles topic={topic} limit={limit} />
      <MainArticles topic={topic} />
    </div>
  );
}
