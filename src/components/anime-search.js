import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {connect} from 'react-redux';
import animeActions from "../actions/anime-actions";

const AnimeSearch = (
        {
            myResults = [],
            findAnimeByTitle
        }
) => {
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState(title)

    useEffect(() => {
        setSearchTitle(title)
        findAnimeByTitle(title)
    }, [])

    return (
        <div>
            <h2>Search Screen</h2>
            <div className="row">
                <div className="col-9">
                    <input value={searchTitle}
                           onChange={(event) => {
                               setSearchTitle(event.target.value)
                           }}
                           className="form-control"/>
                </div>
                <div className="col-3">
                    <button
                        onClick={() => {
                            findAnimeByTitle(searchTitle)
                        }}
                        className="btn btn-primary btn-block">
                        Search
                    </button>
                </div>
            </div>
            <br/>

            <ul className="list-group">
                {

                    myResults && myResults.Search && myResults.Search.map((anime) => {
                    return (
                            <li className="list-group-item">
                                {anime.title}
                            </li>
                        )
                    })
                }
                {JSON.stringify(myResults)}
            </ul>
        </div>
    )
}

const stateToPropertiesManager = (state) => ({
    myResults: state.animeReducer.results
})

const dispatchToPropertiesManager = (dispatch) => ({
    findAnimeByTitle: (title) => animeActions.findAnimeByTitle(dispatch, title)
})

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(AnimeSearch)
