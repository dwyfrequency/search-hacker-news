import React from "react";
import ArticleListItem from "./ArticleListItem/ArticleListItem";

const ArticleListItems = ({ apiResponse }) => {
  const { hits } = apiResponse;
  // console.log(hits);
  return (
    <div className="ArticleListItems">
      {hits.map((item, idx) => (
        <ArticleListItem
          ageIsoString={item.created_at}
          author={item.author}
          objectID={item.objectID}
          title={item.title}
          url={item.url}
          points={item.points}
          num_comments={item.num_comments}
          key={idx}
        />
      ))}
    </div>
  );
};

export default ArticleListItems;
