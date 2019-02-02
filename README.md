To do:
read up and implement react-router-dom for toolbar component https://reacttraining.com/react-router/web/guides/basic-components

- will need to rework app component work better with router
  review grid setup for a better layout.

media queries need to be added for input in header. (the current ones are not working)

https://daveceddia.com/react-practice-projects/

checkout: https://www.youtube.com/watch?v=oGB_VPrld0U&index=2&list=PLTTC1K14KAxHj6AftnRUD28SQaoVauvl3

checkout how they use hooks with forms => https://scotch.io/tutorials/build-a-react-to-do-app-with-react-hooks-no-class-components

HN API docs:
https://hn.algolia.com/api

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### HTML Skeleton

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
              <a href="">About</a>
            </li>
            <li>
              <a href="">Settings</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">API</a>
            </li>
            <li>
              <a href="">Hacker News</a>
            </li>
            <li>
              <a href="">Fork/Contribute</a>
            </li>
            <li>
              <a href="">Status</a>
            </li>
            <li>
              <a href="">Cool app</a>
            </li>
          </ul>
        </footer>
      </div>
