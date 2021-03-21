import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from "react-router-dom";
import animeService from "../services/anime-service";

const AnimeSearch = () => {
    const history = useHistory()
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState(title)
    const [results, setResults] = useState({Search: []})

    useEffect(() => {
        setSearchTitle(title)
        findAnimeByTitle(title)
    }, [])

    const findAnimeByTitle = (title) => {
        history.push(title)
        animeService.findAnimeByTitle(title)
            .then((results) => {
                console.log(results)
                setResults(results)
            })
    }

    return(
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
                    results && results.Search && results.Search.map((anime) => {
                        return(
                            <li className="list-group-item">
                                {anime.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AnimeSearch