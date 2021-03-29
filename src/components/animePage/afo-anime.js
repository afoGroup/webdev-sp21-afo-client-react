import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import AfoNavbar from "../navbar/afo-navbar";
import animeActions from "../../actions/anime-actions";
import {connect} from "react-redux";

const AfoAnime = ({currentAnime, findAnimeByID}) => {

    const[pageStatus, setPageStatus] = useState('init');

    const {animeId} = useParams();

    useEffect(() => {
        console.log('setting new page');
        console.log(currentAnime);
        findAnimeByID(animeId);
        setPageStatus('set');
    }, [pageStatus, animeId, findAnimeByID]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    {
                                        currentAnime && currentAnime.genres &&
                                        <>
                                            <h3 className="afo-purple">Anime: {currentAnime.title}</h3>
                                            <p>Title: {currentAnime.title}</p>
                                            <p>Episodes: {currentAnime.episodes}</p>
                                            <p>Genre: {currentAnime.genres[0].name}</p>
                                            <p>{currentAnime.synopsis}</p>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            img
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


const stateToPropertiesManager = (state) => ({
    currentAnime: state.animeReducer.anime
});

const dispatchToPropertiesManager = (dispatch) => ({
    findAnimeByTitle: (title) => animeActions.findAnimeByTitle(dispatch, title),
    findAnimeByGenre: (genreId) => animeActions.findAnimeByGenre(dispatch, genreId),
    findAnimeByURL: (url) => animeActions.findAnimeByURL(dispatch, url),
    findAnimeByID: (animeId) => animeActions.findAnimeById(dispatch, animeId)
});

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(AfoAnime);