import React, {useEffect, useState} from 'react'
import AfoNavbar from "../navbar/afo-navbar";
import GroupDiscover from "../groupDiscover/group-discover";
import FilterList from "../filter-list";
import animeGenres from "../../constants/genre-id";
import groupService from "../../services/group-service";
import {LOGIN_STATE} from "../../actions/user-constants";
import userService from "../../services/user-service";


const AfoHome = (props) => {
    const filterList = [animeGenres.ACTION, animeGenres.ADVENTURE, animeGenres.COMEDY, animeGenres.FANTASY,
        animeGenres.HORROR, animeGenres.THRILLER, animeGenres.ROMANCE, animeGenres.SCI_FI];

    const [groupList, setGroupList] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [loginState, setLoginState] = useState(LOGIN_STATE.LOGGED_OUT);

    useEffect(() => {
        groupService.findAllGroups()
            .then((groups) => setGroupList(groups))
            .then(() =>
                userService.getCurrentUser()
                    .then((actualUser) => {
                        console.log("(home): " + actualUser);
                        if(actualUser === undefined || actualUser.username === "wbdv-afo-logged-out"){
                            setLoginState(LOGIN_STATE.LOGGED_OUT)
                        } else {
                            console.log("(home) user: " + actualUser.username + " & " + actualUser._id);
                            setCurrentUser(actualUser);
                            setLoginState(LOGIN_STATE.LOGGED_IN);
                        }
                    }).catch(error => {
                        console.log(error)
                    }))
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="afo-purple afo-header my-4">AniFans Only</h1>
                                </div>
                            </div>
                            {
                                loginState === LOGIN_STATE.LOGGED_OUT &&
                                <>
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h6>Discover & Discussion Anime</h6>
                                        </div>
                                    </div>
                                </>
                            }
                            {
                                loginState === LOGIN_STATE.LOGGED_IN &&
                                <>
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h6>Welcome Back!</h6>
                                            <p>{currentUser.username} groups:</p>
                                        </div>
                                    </div>
                                </>
                            }
                            <GroupDiscover groupList={groupList}/>
                            <FilterList
                                filterList={filterList}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AfoHome;