import {BrowserRouter, Route} from "react-router-dom";
import AnimeSearch from "./components/anime-search";
import HomeScreen from "./components/afo-home";

function App() {
  return (
      <div className="container-fluid">
        <BrowserRouter>
          <Route path="/" exact={true}>
            <HomeScreen/>
          </Route>

          <Route path={["/search", "/search/:title"]}
                 exact={true}>
            <AnimeSearch/>
          </Route>

        </BrowserRouter>
      </div>
  );
}

export default App;
