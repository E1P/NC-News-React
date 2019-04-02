import React from "react";

export default function ArticlePreview({ article }) {
  return (
    <section className="article-preview">
      <div>
        <h3>{article.title}</h3>
        <h5>Votes:{article.votes}</h5>
        <h5>Comments: {article.comment_count}</h5>
        <h5>{article.created_at.slice(0, 10)}</h5>
      </div>
    </section>
  );
}
