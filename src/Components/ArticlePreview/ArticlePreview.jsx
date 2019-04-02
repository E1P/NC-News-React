import React from "react";

export default function ArticlePreview({ article }) {
  return (
    <section className="article-preview">
      <div>
        <div>Votes:{article.votes}</div>
        <div>Comments: {article.comment_count}</div>
        <div>{article.created_at.slice(0, 10)}</div>
      </div>
      <div />
      <div>{article.title}</div>
    </section>
  );
}
