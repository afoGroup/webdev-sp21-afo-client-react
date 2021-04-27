import React, {useEffect, useState} from "react";
import animeActions from "../actions/anime-actions";
import {connect} from "react-redux";
import '../styles/afo-filter-list.css';
import {Link} from "react-router-dom";

const FilterList = (props) => {
    const[selectedGenreName, setSelectedGenreName] = useState(props.filterList[0].genreName);
    const[selectedGenreId, setSelectedGenreId] = useState(props.filterList[0].genreId);

    useEffect(() => {
        props.findAnimeByGenre(selectedGenreId);
    }, [selectedGenreId]);

    const selectedTab = (genre) => {
        setSelectedGenreName(genre.genreName);
        setSelectedGenreId(genre.genreId);
    };

    return(
        <div className="row my-5">
            <div className="col-12">
                <div className="afo-filter-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4">
                                    <ul>
                                        {
                                            props.filterList &&
                                            props.filterList.map((genre, index) =>
                                                <div className="row">
                                                    <div className={`col-12 ` + (selectedGenreName === genre.genreName ? "afo-filter-tab-box-selected" : "afo-filter-tab-box")}>
                                                        <div className={(index+1 === props.filterList.length ? "" : "afo-filter-tab-bottom")}>
                                                            <div className="col-12">
                                                                <h5
                                                                    className={`btn afo-filter-tab-title ` + (selectedGenreName === genre.genreName ? "afo-purple" : "afo-black")}
                                                                    onClick={() => selectedTab(genre)}>
                                                                    <strong>{genre.genreName}</strong>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="col-8 afo-filter-result-container">
                                    <h5 className="text-center">Most Popular {selectedGenreName} Anime</h5>
                                    <ul className="afo-filter-result-box">
                                        {
                                            props.resultsList && props.resultsList.anime &&
                                            props.resultsList.anime.map((anime, index) =>
                                                <li key={index} className="afo-filter-result">
                                                    <div className="row m-3">
                                                        <div className="col-6 text-center">
                                                            <img
                                                                src={anime.image_url}
                                                                className="filter-img"
                                                                alt={`Anime, ${anime.title}`}/>
                                                        </div>
                                                        <div className="col-6">
                                                            <Link className="afo-filter-result-title afo-black" to={`/details/anime/${anime.mal_id}`}>
                                                                {anime.title}
                                                            </Link>
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