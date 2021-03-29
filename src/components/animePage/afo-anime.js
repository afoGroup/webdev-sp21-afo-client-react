import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import AfoNavbar from "../navbar/afo-navbar";
import animeActions from "../../actions/anime-actions";
import {connect} from "react-redux";

const AfoAnime = (props) => {

    const[pageStatus, setPageStatus] = useState('init');

    const {animeId} = useParams();

    useEffect(() => {
        console.log('setting new page');
        props.findAnimeByID(animeId);
    }, [pageStatus]);

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


const stateToPropertiesManager = (state) => ({
    resultsList: state.animeReducer.results
});

const dispatchToPropertiesManager = (dispatch) => ({
    findAnimeByTitle: (title) => animeActions.findAnimeByTitle(dispatch, title),
    findAnimeByGenre: (genreId) => animeActions.findAnimeByGenre(dispatch, genreId),
    findAnimeByURL: (url) => animeActions.findAnimeByURL(dispatch, url),
    findAnimeByID: (animeId) => animeActions.findAnimeById(dispatch, animeId)
});

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(AfoAnime);