import React from "react";

// const today =

// age comes in as 2011-10-05T23:42:23.000Z
const convertAge = isoString => {
  const timeDifference = new Date().getTime() - new Date(isoString).getTime();
  const day = 1000 * 60 * 60 * 24;

  const days = Math.floor(timeDifference / day);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);
  const dif = years
    ? `${years} years ago`
    : months
    ? `${months} months ago`
    : `${days} days ago`;
  return dif;
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
          <a href="/">{convertAge(ageIsoString)}</a>
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
