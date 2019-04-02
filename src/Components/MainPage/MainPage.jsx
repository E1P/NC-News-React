import React from "react";
import { MainArticles, TopArticles } from "../index";

export default function MainPage() {
  return (
    <div /* className="router-main" */>
      <TopArticles />
      <MainArticles />
    </div>
  );
}
