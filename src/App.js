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
      </div>
    );
  }
}

export default App;
