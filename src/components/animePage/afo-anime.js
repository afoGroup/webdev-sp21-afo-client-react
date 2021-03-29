import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import AfoNavbar from "../navbar/afo-navbar";

const AfoAnime = (props) => {

    const {animeId} = useParams();

    useEffect(() => {
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="afo-purple afo-header">Anime: {animeId}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AfoAnime;