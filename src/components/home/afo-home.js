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
    const [groupIdList, setGroupIdList] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [loginState, setLoginState] = useState(LOGIN_STATE.LOGGED_OUT);
    const [noGroups, setNoGroups] = useState(true);

    useEffect(() => {
        console.log('loginState: ' + loginState);
        groupService.findAllGroups()
            .then((groups) => setGroupList(groups))
            .then(() =>
                userService.getCurrentUser()
                    .then((actualUser) => {
                        console.log("(home): " + actualUser);
                        if(actualUser === undefined || actualUser.username === "wbdv-afo-logged-out"){
                            setLoginState(LOGIN_STATE.LOGGED_OUT)
                        } else {
                            console.log("(home) user clubs: " + actualUser.username + " & " + actualUser.clubs);

                            groupService.findGroupsById(actualUser.clubs)
                                .then((actualGroupList) => {
                                    setCurrentUser(actualUser);
                                    setLoginState(LOGIN_STATE.LOGGED_IN);
                                    setGroupIdList(actualUser.clubs);
                                    if(actualGroupList.length > 0){
                                        setNoGroups(false);
                                        setGroupList(actualGroupList);
                                    }
                                })
                        }
                    }).catch(error => {
                        console.log(error)
                    }))
    }, [loginState]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="afo-purple afo-header my-4">AniFansOnly</h1>
                                </div>
                            </div>
                            {
                                loginState === LOGIN_STATE.LOGGED_OUT &&
                                <>
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h6>Discover AFO Anime Discussion Board</h6>
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
                                            {
                                                noGroups &&
                                                <>
                                                    <p>{currentUser.username} - join one of the groups below to start your own list</p>
                                                </>
                                            }
                                            {
                                                !noGroups &&
                                                <>
                                                    <p>{currentUser.username} groups joined:</p>
                                                </>
                                            }

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