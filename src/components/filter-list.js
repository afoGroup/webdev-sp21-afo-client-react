import React, {useEffect, useState} from "react";
import animeActions from "../actions/anime-actions";
import {connect} from "react-redux";
import animeGenres from "../constants/genre-id";
import AnimeResult from "./search/anime-result";
import '../styles/afo-filter-list.css';

const FilterList = (props) => {
    const[selectedGenre, setSelectedGenre] = useState(props.filterList[0]);

    useEffect(() => {
        console.log(props.resultsList);
    }, [props.resultsList]);

    const selectedTab = (item) => {
        setSelectedGenre(item);
        console.log(animeGenres.ACTION);
        props.findAnimeByGenre(animeGenres.ACTION);
    };

    return(
        <div className="row my-5">
            <div className="col-12">
                <div className="afo-filter-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-5 col-md-4">
                                    <ul>
                                        {
                                            props.filterList &&
                                            props.filterList.map((item, index) =>
                                                <div className="row">
                                                    <div className={`col-12 ` + (selectedGenre === item ? "afo-filter-tab-box-selected" : "afo-filter-tab-box")}>
                                                        <div className={(index+1 === props.filterList.length ? "" : "afo-filter-tab-bottom")}>
                                                            <div className="col-12">
                                                                <h5
                                                                    className={`btn afo-filter-tab-title ` + (selectedGenre === item ? "afo-purple" : "afo-black")}
                                                                    onClick={() => selectedTab(item)}>
                                                                    <strong>{item}</strong>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="col- col-md-8 afo-filter-result-container">

                                        <ul className="afo-filter-result-box">
                                            {
                                                props.resultsList.anime &&
                                                props.resultsList.anime.map((anime, index) =>
                                                    <li key={index} className="afo-filter-result">
                                                        <div className="row m-3">
                                                            <div className="col-6">
                                                                <img
                                                                    src={anime.image_url}
                                                                    className="filter-img"
                                                                    alt={`Anime, ${anime.title}`}/>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="btn afo-filter-result-title">{anime.title}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const stateToPropertiesManager = (state) => ({
    resultsList: state.animeReducer.results,
    searchKey: state.animeReducer.searchKey
});

const dispatchToPropertiesManager = (dispatch) => ({
    findAnimeByTitle: (title) => animeActions.findAnimeByTitle(dispatch, title),
    findAnimeByGenre: (genreId) => animeActions.findAnimeByGenre(dispatch, genreId),
    findAnimeByURL: (url) => animeActions.findAnimeByURL(dispatch, url),
    findAnimeByID: (animeId) => animeActions.findAnimeById(dispatch, animeId)
});

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(FilterList);