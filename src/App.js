import React, { useState, useEffect } from "react";
import Logo from "./assets/logo-hn-search.png";
import SearchForm from "./containers/SearchForm";
import ArticleListItems from "./components/ArticleListItems/ArticleListItems";
import ArticleListItem from "./components/ArticleListItems/ArticleListItems";

const App = props => {
  // State
  const [apiResponse, setAPIResponse] = useState({ hits: [] });

  // http://hn.algolia.com/api/v1/search_by_date?tags=story  || https://www.robinwieruch.de/react-hooks-fetch-data/
  // const [] = useEffect();

  // Methods
  const addAPIResponse = data => {
    console.log(`data`, data);
    data && setAPIResponse(data);
  };
  console.log(apiResponse);

  return (
    <div className="App">
      <header className="Header">
        <div className="TopHeader">
          <img src={Logo} alt="logo" className="Logo" />
          <SearchForm addAPIResponse={addAPIResponse} />
          <div className="Toolbar">ToolBar</div>
        </div>
        <div className="SearchFilters">
          <button>Stories</button>
          <button>Popularity</button>
          <button>All time</button>
        </div>
      </header>
      <main className="Main">
        <ArticleListItems apiResponse={apiResponse} />
        <div className="MoreResults">
          <button>Page 1</button>
        </div>
      </main>
      <footer className="Footer">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">Hacker News</a>
          </li>
          <li>
            <a href="/">Fork/Contribute</a>
          </li>
          <li>
            <a href="/">Status</a>
          </li>
          <li>
            <a href="/">Cool app</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
