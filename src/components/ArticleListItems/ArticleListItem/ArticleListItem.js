import React from "react";

const ArticleListItem = params => {
  return (
    <div className="ArticleListItem">
      <h2>
        <a href="/">Article Title</a>
      </h2>
      <ul>
        <li>
          <a href="/">Points</a>
        </li>
        <li>
          <a href="/">Author</a>
        </li>
        <li>
          <a href="/">Age</a>
        </li>
        <li>
          <a href="/">Comments</a>
        </li>
      </ul>
    </div>
  );
};

export default ArticleListItem;
