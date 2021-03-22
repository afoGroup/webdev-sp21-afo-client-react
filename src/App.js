import {BrowserRouter, Route} from "react-router-dom";
import AnimeSearch from "./components/search/anime-search";
import HomeScreen from "./components/afo-home";
import animeReducer from "./reducers/anime-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({
    animeReducer: animeReducer
})

const store = createStore(reducer)

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
