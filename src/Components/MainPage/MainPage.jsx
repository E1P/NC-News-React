import React from "react";
import { MainArticles, TopArticles } from "./Components/index";

export default function MainPage() {
  return (
    <div className="main">
      <MainArticles />
      <TopArticles />
    </div>
  );
}
