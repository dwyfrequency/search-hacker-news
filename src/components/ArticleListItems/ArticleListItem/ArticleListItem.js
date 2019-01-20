import React from "react";

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

const ArticleListItem = ({
  author,
  points,
  title,
  url,
  ageIsoString,
  num_comments,
  objectID
}) => {
  const hnUrl = `https://news.ycombinator.com/item?id=${objectID}`;
  return (
    <div className="ArticleListItem">
      <h2>
        <a href={url}>{title}</a>
      </h2>
      <ul>
        <li>
          <a href={hnUrl}>{points} points</a>
        </li>
        <li>
          <a href={hnUrl}>{author}</a>
        </li>
        <li>
          <a href={hnUrl}>{convertAge(ageIsoString)}</a>
        </li>
        <li>
          <a href={hnUrl}>{num_comments} comments</a>
        </li>
        <li>
          <a href={url}>({url})</a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default ArticleListItem;
