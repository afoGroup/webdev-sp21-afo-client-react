import React from "react";
import AfoNavbar from "../navbar/afo-navbar";
import GroupDiscover from "../groupDiscover/group-discover";
import SettingsPage from "./afo-settings";
import '../../styles/afo-profile.css';

const Profile = () => {

    const profile = {
        username: 'kris10',
        email: 'kris10@gmail.com',
        password: 'kris1234',
        image_url: 'https://cdn.pixabay.com/photo/2017/04/13/15/19/hands-2227857_960_720.jpg',
        bio: 'This is a test bio so I am just going to type and type and type and type and type ' +
            'and type and type and type and type and type and type and type and type and type ' +
            'and type and type and type and type and type and type and type and type.',
        type: 'otaku',
        cardNum: '123456789',
        twitter: 'kris10',
        instagram: 'kris10'
    };

    const groupList = [
        {id: '123'},
        {id: '456'},
        {id: '789'}
    ];

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

                            <GroupDiscover groupList={groupList}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;