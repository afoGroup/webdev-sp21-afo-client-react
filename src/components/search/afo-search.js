import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import animeActions from "../../actions/anime-actions";
import AfoNavbar from "../navbar/afo-navbar";
import SearchForm from "./search-form";
import SearchResults from "./search-results";
import "../../styles/afo-search.css"

const AfoSearch = (props) => {
    const [searchStatus, setSearchStatus] = useState('init');
    const [searchType, setSearchType] = useState('init');
    const [searchTitle, setSearchTitle] = useState('');
    const [searchURL, setSearchURL] = useState('');

    useEffect(() => {
        console.log('setting...');
        console.log(searchTitle);
        console.log(searchStatus);
        console.log(props.resultsList);
        setSearchStatus('set');
    }, [searchStatus]);

    const searchClicked = (searchType) => {
        setSearchType(searchType);
        if(searchType === 'title'){
            props.findAnimeByTitle(searchTitle);
        } else if(searchType === 'url'){
            props.findAnimeByURL(searchURL);
        }
        setSearchStatus('search');
    };

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="afo-purple afo-header">Search</h1>
                                </div>
                            </div>
                            <SearchForm
                                searchStatus={searchStatus}
                                searchTitle={searchTitle}
                                setSearchTitle={setSearchTitle}
                                searchURL={searchURL}
                                setSearchURL={setSearchURL}
                                searchClicked={searchClicked}
                            />
                            <div className="row">
                                <div className="col-12 search-page-break"></div>
                            </div>
                            {
                                searchType !== 'init' && props.resultsList.results &&
                                <SearchResults
                                    searchKey={props.searchKey}
                                    resultsList={props.resultsList.results}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
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

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(AfoSearch);