import React from "react";

// age comes in as 2011-10-05T23:42:23.000Z
const convertAge = isoString => {
  const date = new Date(isoString);
};

const ArticleListItem = ({ author, points, title, url, ageIsoString }) => {
  return (
    <div className="ArticleListItem">
      <h2>
        <a href={url}>{title}</a>
      </h2>
      <ul>
        <li>
          <a href="/">{points}</a>
        </li>
        <li>
          <a href="/">{author}</a>
        </li>
        <li>
          <a href="/">Age</a>
        </li>
        <li>
          <a href="/">Comments</a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default ArticleListItem;
