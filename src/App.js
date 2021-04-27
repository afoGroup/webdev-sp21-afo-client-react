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
import GroupManager from "./components/profile/afo-group-manager";

import "./styles/App.css";
import "./styles/afo-colors.css"

const reducer = combineReducers({
    animeReducer: animeReducer,
    userReducer: userReducer,
    postReducer: postReducer
});

const store = createStore(reducer);

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path={["/", "/home"]} exact={true}>
                    <AfoHome/>
                </Route>

                <Route path={["/search", "/search/:criteria"]}
                       exact={true}>
                    <AfoSearch/>
                </Route>

                <Route path={["/details/anime/:animeId"]}
                       exact={true}>
                    <AfoAnime/>
                </Route>

                <Route path={["/login", "/login/"]}
                       exact={true}>
                    <Login/>
                </Route>

                <Route path={["/register", "/register/"]}
                       exact={true}>
                    <Registration/>
                </Route>

                <Route path={["/details/group/:groupId", "/details/group/:groupId/"]}
                       exact={true}>
                    <Group/>
                </Route>

                <Route path={["/profile", "/profile/", "/profile/:userId", "/profile/:userId/"]}
                       exact={true}>
                    <Profile/>
                </Route>

                <Route path={["/profile/settings", "/profile/settings/", "/profile/settings/:userId", "/profile/settings/:userId/"]}
                       exact={true}>
                    <Settings/>
                </Route>

                <Route path={["/profile/group-manager/:userId", "/profile/group-manager/:userId/"]}
                       exact={true}>
                    <GroupManager/>
                </Route>

            </BrowserRouter>
        </Provider>
    );
};

export default App;