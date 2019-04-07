import React from "react";

export default function ArticlePreview({ article }) {
  return (
    <section className="article-preview">
      {/* <div> */}
      <h3>{article.title}</h3>
      <p>Votes:{article.votes}</p>
      <p>Comments: {article.comment_count}</p>
      <p>{article.created_at.slice(0, 10)}</p>
      {/* </div> */}
    </section>
  );
}
