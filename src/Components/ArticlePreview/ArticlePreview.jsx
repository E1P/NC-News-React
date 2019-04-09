import React from "react";

export default function ArticlePreview({ article }) {
  const { title, votes, comment_count, created_at, topic } = article;
  return (
    <section className={`article-preview ${topic}`}>
      {/* <div> */}
      <h3>{title}</h3>
      <p>Votes:{votes}</p>
      <p>Comments: {comment_count}</p>
      <p>{created_at.slice(0, 10)}</p>
      {/* </div> */}
    </section>
  );
}
