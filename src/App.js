import React, { useState } from "react";
import Logo from "./assets/logo-hn-search.png";
import SearchForm from "./containers/SearchForm";
import ArticleListItems from "./components/ArticleListItems/ArticleListItems";
import Footer from "./components/Footer/Footer";

const App = props => {
  // State
  const [apiResponse, setAPIResponse] = useState({ hits: [] });

  // http://hn.algolia.com/api/v1/search_by_date?tags=story  || https://www.robinwieruch.de/react-hooks-fetch-data/
  // const [] = useEffect();

  // Methods
  const addAPIResponse = data => setAPIResponse(data);

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
          Search <button>Stories </button>
          by <button>Popularity </button>
          for <button>All time </button>
        </div>
      </header>
      <main className="Main">
        <ArticleListItems apiResponse={apiResponse} />
        <div className="MoreResults">
          <button>Page 1</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
