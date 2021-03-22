import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {connect} from 'react-redux';
import animeActions from "../../actions/anime-actions";
import {ACTION, ADVENTURE, COMEDY, FANTASY, HORROR} from "../../constants/genre-id";

const AnimeSearch = (
        {
            myResults = [],
            findAnimeByTitle,
            findAnimeByGenre
        }
) => {
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState(title)
    const [searchGenre, setSearchGenre] = useState(ACTION)
    const [searchType, setSearchType] = useState(1)

    /*useEffect(() => {
        setSearchTitle(title)
    }, [])*/

    return (
        <div>
            <h2>Anime Search</h2>
            <div className="row">
                {
                    searchType==1 &&
                    <div className="col-6">

                        <input value={searchTitle}
                               onChange={(event) => {
                                   setSearchTitle(event.target.value)
                               }}
                               className="form-control"/>
                    </div>
                }
                {
                    searchType!=1 &&
                    <div className="col-6">
                        <select
                            onChange={(e) => {
                                setSearchGenre(e.target.value)
                            }}
                            value={searchGenre} className="form-control">
                            <option value={ACTION}>Action</option>
                            <option value={ADVENTURE}>Adventure</option>
                            <option value={COMEDY}>Comedy</option>
                            <option value={FANTASY}>Fantasy</option>
                            <option value={HORROR}>Horror</option>
                        </select>
                    </div>
                }
                <div className="col-3">
                    <select
                        onChange={(e) => {
                            setSearchType(e.target.value)
                        }}
                        value={searchType} className="form-control">
                        <option value={1}>Title</option>
                        <option value={0}>Genre</option>
                    </select>
                </div>
                <div className="col-3">
                    {
                        searchType==1 &&
                        <button
                            onClick={() => {
                                findAnimeByTitle(searchTitle)
                            }}
                            className="btn btn-primary btn-block">
                            Search
                        </button>
                    }
                    {
                        searchType!=1 &&
                        <button
                            onClick={() => {
                                findAnimeByGenre(searchGenre)
                            }}
                            className="btn btn-primary btn-block">
                            Search
                        </button>
                    }
                </div>
            </div>
            <br/>

            <ul className="list-group">
                {
                    myResults && myResults.results && myResults.results.map(anime =>
                            <li className="list-group-item">
                                {anime.title}
                            </li>
                    )
                }
            </ul>
        </div>
    )
}

const stateToPropertiesManager = (state) => ({
    myResults: state.animeReducer.results
})

const dispatchToPropertiesManager = (dispatch) => ({
    findAnimeByTitle: (title) => animeActions.findAnimeByTitle(dispatch, title),
    findAnimeByGenre: (genreId) => animeActions.findAnimeByGenre(dispatch, genreId)
})

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(AnimeSearch)
