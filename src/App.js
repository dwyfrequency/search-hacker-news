import React, { Component } from "react";
import Logo from "./assets/logo-hn-search.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="TopHeader">
            <img src={Logo} alt="logo" />
            <form>
              <input
                type="text"
                placeholder="Search Stories by title, url or author<"
              />
            </form>
            <div className="Toolbar">ToolBar</div>
          </div>
          <div className="SearchFilters">
            <button>Stories</button>
            <button>Popularity</button>
            <button>All time</button>
          </div>
        </header>
        <main>
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
          <div className="MoreResults">
            <button>Page 1</button>
          </div>
        </main>
        <footer>
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
  }
}

export default App;
