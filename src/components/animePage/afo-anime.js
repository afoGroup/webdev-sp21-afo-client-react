import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import AfoNavbar from "../navbar/afo-navbar";
import animeActions from "../../actions/anime-actions";
import {connect} from "react-redux";
import "../../styles/afo-anime.css"

const AfoAnime = ({currentAnime, findAnimeByID}) => {

    const[pageStatus, setPageStatus] = useState('init');

    const {animeId} = useParams();

    useEffect(() => {
        console.log(currentAnime);
        findAnimeByID(animeId);
        setPageStatus('set');
    }, [pageStatus, animeId, findAnimeByID]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    {
                        currentAnime && currentAnime.genres &&
                        <div className="row top-row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 anime-info">
                                        <div className="row pb-4">
                                            <div className="col-12 col-md-6">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-12 anime-header">
                                                                <h3 className="afo-purple">
                                                                    {currentAnime.title}
                                                                </h3>
                                                                <h6>
                                                                    {currentAnime.title_japanese}
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <p className="afo-gray float-right">
                                                                    {currentAnime.rating}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12 pb-5">
                                                                <h6 className="afo-dark-purple">
                                                                    <strong>
                                                                        <i className="fa fa-star"></i>
                                                                        {` `}{currentAnime.score} / 10
                                                                    </strong>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12 pb-4">
                                                                <p>
                                                                    <strong>Genre: </strong>
                                                                    {
                                                                        currentAnime.genres.map((genre,index) =>{
                                                                            if(index+1 === currentAnime.genres.length){
                                                                                return <span key={index}>{genre.name}</span>
                                                                            } else{
                                                                                return <span key={index}>{genre.name}, </span>
                                                                            }
                                                                        })
                                                                    }
                                                                </p>
                                                                <p>
                                                                    <strong>Episodes:</strong> {currentAnime.episodes}
                                                                </p>
                                                                <p>
                                                                    <strong>Aired:</strong> {currentAnime.aired.string}
                                                                </p>
                                                                <p>
                                                                    <strong>Status:</strong> {currentAnime.status}
                                                                </p>
                                                                {
                                                                    currentAnime.trailer_url &&
                                                                    <a className="btn btn-secondary"
                                                                       href={currentAnime.trailer_url} target="_blank">
                                                                        View Trailer
                                                                    </a>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 text-center">
                                                <img
                                                    src={currentAnime.image_url}
                                                    className="anime-img"
                                                    alt={`Anime, ${currentAnime.title}`}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p>{currentAnime.synopsis}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    }
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