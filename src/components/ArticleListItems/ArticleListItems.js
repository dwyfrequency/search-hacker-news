import React from "react";
import ArticleListItem from "./ArticleListItem/ArticleListItem";

const ArticleListItems = ({ apiResponse }) => {
  const { hits } = apiResponse;
  return (
    <div className="ArticleListItems">
      {hits.map((item, idx) => (
        <ArticleListItem
          author={item.author}
          title={item.title}
          url={item.url}
          key={idx}
        />
      ))}
    </div>
  );
};

export default ArticleListItems;
