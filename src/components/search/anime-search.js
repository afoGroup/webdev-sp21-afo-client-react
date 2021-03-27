import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import {connect} from 'react-redux';
import animeActions from "../../actions/anime-actions";
import {ACTION, ADVENTURE, COMEDY, FANTASY, HORROR, ROMANCE, SCI_FI, THRILLER} from "../../constants/genre-id";

const AnimeSearch = (
        {
            myResults = [],
            findAnimeByTitle,
            findAnimeByGenre,
            findAnimeByURL
        }
) => {
    const {title} = useParams()
    const [searchType, setSearchType] = useState(1)
    const [searchTitle, setSearchTitle] = useState(title)
    const [searchGenre, setSearchGenre] = useState(ACTION)
    const [searchURL, setSearchURL] = useState()

    return (
        <div>
            <h2>Anime Search</h2>
            <div className="row">

                <div className="col-3">
                    <select
                        onChange={(e) => {
                            setSearchType(parseInt(e.target.value))
                        }}
                        value={searchType} className="form-control">
                        <option value={1}>Title</option>
                        <option value={0}>Genre</option>
                        <option value={2}>Image URL</option>
                    </select>
                </div>


                {searchType===1 &&
                    <div className="col-6">
                        <input value={searchTitle}
                               onChange={(event) => {
                                   setSearchTitle(event.target.value)}}
                               className="form-control"/>
                    </div>
                }

                {searchType===0 &&
                    <div className="col-6">
                        <select
                            onChange={(e) => {
                                setSearchGenre(e.target.value)}}
                            value={searchGenre} className="form-control">
                            <option value={ACTION}>Action</option>
                            <option value={ADVENTURE}>Adventure</option>
                            <option value={COMEDY}>Comedy</option>
                            <option value={FANTASY}>Fantasy</option>
                            <option value={HORROR}>Horror</option>
                            <option value={THRILLER}>Thriller</option>
                            <option value={ROMANCE}>Romance</option>
                            <option value={SCI_FI}>Sci-Fi</option>
                        </select>
                    </div>
                }

                {searchType===2 &&
                <div className="col-6">
                    <input value={searchURL}
                           onChange={(event) => {
                               setSearchURL(event.target.value)}}
                           className="form-control"/>
                </div>
                }

                <div className="col-3">
                    {searchType===1 &&
                        <button
                            onClick={() => {
                                findAnimeByTitle(searchTitle)
                                console.log(searchTitle)
                            }}
                            className="btn btn-primary btn-block">Search
                        </button>
                    }

                    {searchType===0 &&
                        <button
                            onClick={() => {
                                findAnimeByGenre(searchGenre)}}
                            className="btn btn-primary btn-block">Search
                        </button>
                    }
                    {searchType===2 &&
                    <button
                        onClick={() => {
                            findAnimeByURL(searchURL)}}
                        className="btn btn-primary btn-block">Search
                    </button>
                    }

                </div>
            </div>

            <br/>

            <ul className="list-group">
                {myResults && myResults.results && myResults.results.map(anime =>
                        <li className="list-group-item" key={anime.mal_id} >
                            <div className="col-2">
                                Id: {anime.mal_id}
                            </div>

                            <div className="col-10">
                                <h3>
                                    {anime.title}
                                </h3>
                            </div>

                            <div className="col-12">
                                <p>
                                    <img src={anime.image_url} width={120} style={{float: "right"}}/>
                                    {anime.synopsis}
                                </p>
                            </div>

                            <div className="col-4">
                                <p>
                                    Rated {anime.rated}
                                </p>
                            </div>

                        </li>

                )}
            </ul>
        </div>
    )
}

const stateToPropertiesManager = (state) => ({
    myResults: state.animeReducer.results
})

const dispatchToPropertiesManager = (dispatch) => ({
    findAnimeByTitle: (title) => animeActions.findAnimeByTitle(dispatch, title),
    findAnimeByGenre: (genreId) => animeActions.findAnimeByGenre(dispatch, genreId),
    findAnimeByURL: (url) => animeActions.findAnimeByURL(dispatch, url),
})

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(AnimeSearch)
