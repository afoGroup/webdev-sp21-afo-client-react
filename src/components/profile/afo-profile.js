import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import userActions from "../../actions/user-actions";
import userService from "../../services/user-service";
import AfoNavbar from "../navbar/afo-navbar";
import GroupDiscover from "../groupDiscover/group-discover";
import SettingsPage from "./afo-settings";
import '../../styles/afo-profile.css';
import {useDispatch, useSelector} from "react-redux";
import groupService from "../../services/group-service";
import {act} from "@testing-library/react";

const Profile = () => {

    const {userId} = useParams();
    const history = useHistory();

    const [currentUser, setCurrentUser] = useState({});
    const [pageUser, setPageUser] = useState({});
    const [currentUserStatus, setCurrentUserStatus] = useState(false);
    const [groupList, setGroupList] = useState([]);
    const [groupIdList, setGroupIdList] = useState([]);

    useEffect(() => {
        console.log('pageId: ' + userId);
        userService.getCurrentUser()
            .then((actualUser) => {
                if(userId === undefined){
                    console.log('currentUser clubs: ' + actualUser.clubs);
                    setCurrentUser(actualUser);
                    setPageUser(actualUser);
                    setGroupIdList(actualUser.clubs);
                    setCurrentUserStatus(true);
                }
            })
    }, []);

    useEffect(() => {
        if(userId !== undefined){
            userService.findUserById(userId)
                .then((actualUser) => {
                    if(actualUser._id === userId){
                        console.log('pageUser clubs: ' + actualUser.clubs);
                        setPageUser(actualUser);
                        setGroupIdList(actualUser.clubs);
                    }
                })
        }
    }, [userId]);

    useEffect(() => {
        groupService.findGroupsById(groupIdList)
            .then((actualGroupList) => setGroupList(actualGroupList))
            .catch(error => console.log(error))
    }, [groupIdList]);

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">
                            {
                                pageUser.username === "wbdv-afo-logged-out" &&
                                <>
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h1 className="m-auto my-5 afo-header">Must login to view profile</h1>
                                            <button type="button"
                                                    className="btn group-btn btn-block my-3"
                                                    onClick={() => {history.push("/login")}}>
                                                <strong className="afo-white">Login to join group & post</strong>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            }
                            {
                                pageUser.username !== "wbdv-afo-logged-out" &&
                                <>
                                    <div className="row">
                                        <div className="col-6 m-4">
                                            <h3 className="afo-purple afo-header">{pageUser.username}</h3>
                                            <p><strong>Twitter: @</strong> {pageUser.twitter}</p>
                                            <p><strong>Instagram: @</strong> {pageUser.instagram}</p>
                                            <p>{pageUser.bio}</p>
                                        </div>
                                        <div className="col-5 m-4 custom-control-inline">
                                            {
                                                pageUser.pictureURL !== ''?
                                                    <img
                                                        src={"https://www.rover.com/blog/wp-content/uploads/2020/01/happy-corgi.jpg"}
                                                        className="anime-img"
                                                        alt={`${pageUser.username} profile`}/> : <></>

                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h6>{pageUser.username} Groups:</h6>
                                        </div>
                                    </div>

                                    {
                                        pageUser.clubs &&
                                        <>
                                            <div className="mb-5">
                                                <GroupDiscover groupList={groupList}/>
                                            </div>
                                        </>
                                    }

                                    {
                                        pageUser.userType === "otaku" &&
                                        <>
                                            <p className="my-2">{pageUser.username} - you can view the groups you own in your
                                                <Link classname="afo-purple" to={`/profile/group-manager/${pageUser._id}`}> Group Manager</Link>
                                            </p>
                                        </>
                                    }
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;