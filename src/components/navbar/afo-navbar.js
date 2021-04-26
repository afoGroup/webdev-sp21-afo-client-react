import React, {useEffect, useRef, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import {LOGIN_STATE} from "../../actions/user-constants";
import {useDispatch, useSelector} from "react-redux";
import userActions from '../../actions/user-actions';

import '../../styles/afo-navbar.css';
import userService from "../../services/user-service";

const AfoNavbar = () => {
    const mainMenuRef = useRef(null);
    const profileMenuRef = useRef(null);
    const [mainMenu, setMainMenu] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);
    const mainClick = () => setMainMenu(!mainMenu);
    const profileClick = () => setProfileMenu(!profileMenu);

    const history = useHistory();

    const logout = () => {
        userService.logout()
            .then(() => {
                setLoginState(LOGIN_STATE.LOGGED_OUT)
                history.push("/home")
            });
    };

    const [currentUser, setCurrentUser] = useState({});
    const [loginState, setLoginState] = useState(LOGIN_STATE.LOGGED_OUT);

    useEffect(() => {
        userService.getCurrentUser()
            .then((actualUser) => {
                console.log("(navabr): " + actualUser);
                if(actualUser === undefined || actualUser.username === "wbdv-afo-logged-out"){
                    setLoginState(LOGIN_STATE.LOGGED_OUT)
                } else {
                    console.log("(navbar) user: " + actualUser.username + " & " + actualUser._id);
                    setCurrentUser(actualUser);
                    setLoginState(LOGIN_STATE.LOGGED_IN);
                }
            }).catch(error => {
            console.log(error)
        })
    }, []);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if(mainMenuRef.current !== null && !mainMenuRef.current.contains(e.target)){
                setMainMenu(false);
            }
        };
        if(mainMenu) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }

    }, [mainMenu]);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if(profileMenuRef.current !== null && !profileMenuRef.current.contains(e.target)){
                setProfileMenu(false);
            }
        };
        if(profileMenu) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }

    }, [profileMenu]);

    return(
        <>
            <div className="row navbar fixed-top navbar-expanded-lg navbar-dark afo-navbar">
                <div className="col-3">
                    <i className="fa fa-bars btn afo-white navbar-btn"
                       onClick={mainClick}
                       title="main menu"></i>
                </div>
                <div className="col-6 text-center">
                    <Link to="/home" style={{ textDecoration:'none'}}>
                        <span className="afo-white">
                            <strong>AFO</strong>
                        </span>
                    </Link>
                </div>
                <div className="col-3 text-right">
                    {
                        loginState === LOGIN_STATE.LOGGED_IN && <span>{currentUser.username}</span>
                    }
                    <i className="fa fa-user-circle btn afo-white navbar-btn"
                       onClick={profileClick}
                       title="profile menu"></i>
                </div>
            </div>

            <div className="row menu-container">
                <div className="col-6 main-menu-container">
                    <nav ref={mainMenuRef} className={`menu main-menu ${mainMenu ? 'active' : 'inactive'}`}>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/search">Search</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-6 profile-menu-container">
                    <nav ref={profileMenuRef} className={`menu profile-menu ${profileMenu ? 'active' : 'inactive'}`}>
                        {
                            loginState === LOGIN_STATE.LOGGED_OUT &&
                            <ul>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </ul>
                        }
                        {
                            loginState === LOGIN_STATE.LOGGED_IN &&
                            <ul>
                                <li><Link to={`/user/` + currentUser._id}>Profile</Link></li>
                                <li><Link to={`/settings/` + currentUser._id}>Settings</Link></li>
                                <li><span className="btn" onClick={() => logout()}>Log Out</span></li>
                            </ul>
                        }
                    </nav>
                </div>
            </div>

        </>
    );
};

export default AfoNavbar;