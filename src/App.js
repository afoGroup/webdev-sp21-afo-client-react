import {BrowserRouter, Route} from "react-router-dom";
import {Provider, useSelector} from "react-redux";
import animeReducer from "./reducers/anime-reducer";
import userReducer from "./reducers/user-reducer";
import postReducer from "./reducers/post-reducer";
import {combineReducers, createStore} from "redux";

import AfoHome from "./components/home/afo-home";
import AfoSearch from "./components/search/afo-search";
import AfoAnime from "./components/animePage/afo-anime";
import Login from "./components/login";
import Registration from "./components/registration";
import Group from "./components/groupPage/afo-group";
import Profile from "./components/profile/afo-profile";
import Settings from "./components/profile/afo-settings";

import "./styles/App.css";
import "./styles/afo-colors.css"

const reducer = combineReducers({
    animeReducer: animeReducer,
    userReducer: userReducer,
    postReducer: postReducer
});

const store = createStore(reducer);

const sessionId = document.cookie;

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path={["/", "/home"]} exact={true}>
                    <AfoHome currentSessionId={sessionId}/>
                </Route>

                <Route path={["/search", "/search/:title"]}
                       exact={true}>
                    <AfoSearch currentSessionId={sessionId}/>
                </Route>

                <Route path={["/anime/:animeId"]}
                       exact={true}>
                    <AfoAnime currentSessionId={sessionId}/>
                </Route>

                <Route path={["/login", "/login/"]}
                       exact={true}>
                    <Login currentSessionId={sessionId}/>
                </Route>

                <Route path={["/register", "/register/"]}
                       exact={true}>
                    <Registration currentSessionId={sessionId}/>
                </Route>

                <Route path={["/group/:groupId", "/group/:groupId/"]}
                       exact={true}>
                    <Group currentSessionId={sessionId}/>
                </Route>

                <Route path={[
                    "/user/:userId", "/user/:userId/"]}
                       exact={true}>
                    <Profile currentSessionId={sessionId}/>
                </Route>

                <Route path={["/settings/:userId", "/settings/:userId/"]}
                       exact={true}>
                    <Settings currentSessionId={sessionId}/>
                </Route>

            </BrowserRouter>
        </Provider>
    );
};

export default App;