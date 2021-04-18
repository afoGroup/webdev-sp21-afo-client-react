import {BrowserRouter, Route} from "react-router-dom";
import AfoHome from "./components/home/afo-home";
import AfoSearch from "./components/search/afo-search";
import AfoAnime from "./components/animePage/afo-anime";
import animeReducer from "./reducers/anime-reducer";
import userReducer from "./reducers/user-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import "./styles/App.css";
import "./styles/afo-colors.css"

const reducer = combineReducers({
    animeReducer: animeReducer,
    userReducer: userReducer
});

const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
                <BrowserRouter>
                    <Route path={["/", "/home"]} exact={true}>
                        <AfoHome/>
                    </Route>

                    <Route path={["/search", "/search/:title"]}
                           exact={true}>
                        <AfoSearch/>
                    </Route>

                    <Route path={["/anime/:animeId"]}
                           exact={true}>
                        <AfoAnime/>
                    </Route>

                </BrowserRouter>
        </Provider>
    );
}

export default App;
