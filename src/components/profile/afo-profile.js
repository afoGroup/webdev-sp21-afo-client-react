import React from "react";
import AfoNavbar from "../navbar/afo-navbar";
import settingsPage from "./afo-settings";

const Profile = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="afo-purple afo-header">Profile Page</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;