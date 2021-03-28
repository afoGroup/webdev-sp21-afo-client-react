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
    const [resultPages, setResultPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pcFirst, setPcFirst] = useState(0);
    const [pcSecond, setPcSecond] = useState(0);
    const [pcThird, setPcThird] = useState(0);

    useEffect(() => {
        console.log('setting...');
        console.log(searchTitle);
        console.log(searchStatus);
        console.log(props.resultsList);
        console.log(pcFirst);
        console.log(pcSecond);
        console.log(pcThird);
        updatePageControls('first');
        setSearchStatus('set')
    }, [searchStatus, resultPages]);

    const searchClicked = (searchType) => {
        setSearchType(searchType);
        if(searchType === 'title'){
            props.findAnimeByTitle(searchTitle);
        } else if(searchType === 'url'){
            props.findAnimeByURL(searchURL);
        }
        makePageLists();
        setSearchStatus('search');
    };

    const makePageLists = () => {
        let newSearchPages = [];
        if(props.resultsList.results){
            let numResults = props.resultsList.results.length;
            let remainder = numResults % 10;
            let numPages = Math.floor( numResults / 10);
            if(!(remainder === 0)){
                numPages = numPages + 1;
            }
            for(let p = 1; p < numPages+1; p++){
                let tempPageList = [];
                let first = 0;
                let last = 0;
                if(p === numPages && !(remainder === 0)){
                    first = (p*10)-10;
                    last = first + (remainder+1);
                } else{
                    last = p*10;
                    first = last-10;
                }
                tempPageList = props.resultsList.results.slice(first, last);
                newSearchPages.push(tempPageList);
            }
            setResultPages(newSearchPages);
        }
    };

    const updatePageControls = (val) => {
        let tempCurrentPage = currentPage;
        let currentFirst = pcFirst;
        let currentSecond = pcSecond;
        let currentThird = pcThird;
        let numPages = resultPages.length;
        if(val === 'first'){
            setCurrentPage(1);
            setPcFirst(1);
            if(numPages >=2){
                setPcSecond(2);
            } else {
                setPcSecond(0);
            }
            if(numPages >=3){
                setPcThird(3);
            } else {
                setPcThird(0);
            }
        } else if(val === 'last'){
            setCurrentPage(numPages);
            if(numPages >=3){
                setPcThird(numPages);
                setPcSecond(numPages-1);
                setPcFirst(numPages-2);
            }
        } else if(val === 'left'){
            if(tempCurrentPage > 1){
                setCurrentPage(tempCurrentPage-1);
                if(tempCurrentPage-1 === 1){
                    setPcFirst(1);
                    setPcSecond(2);
                    if(numPages >=3){
                        setPcThird(3);
                    } else {
                        setPcThird(0);
                    }
                } else if((tempCurrentPage-2 >= 1)){
                    setPcFirst(tempCurrentPage-2);
                    setPcSecond(tempCurrentPage-1);
                    setPcThird(tempCurrentPage);
                }
            }
        } else if(val === 'right'){
            if(tempCurrentPage < numPages){
                setCurrentPage(tempCurrentPage+1);
                if(tempCurrentPage+1 === numPages){
                    if(numPages === 2){
                        setPcFirst(1);
                        setPcSecond(2);
                        setPcThird(0);
                    } else if(numPages > 2){
                        setPcThird(tempCurrentPage+1);
                        setPcSecond(tempCurrentPage);
                        setPcFirst(tempCurrentPage-1);
                    }
                } else if(tempCurrentPage+2 <= numPages) {
                    setPcFirst(tempCurrentPage);
                    setPcSecond(tempCurrentPage+1);
                    setPcThird(tempCurrentPage+2);
                }
            }
        } else if(val === 'pc1'){
            if(!(tempCurrentPage === currentFirst)){
                setCurrentPage(currentFirst);
                if(currentFirst >= 2){
                    setPcSecond(currentFirst);
                    setPcFirst(currentFirst-1);
                    setPcThird(currentFirst+1);
                }
            }
        } else if(val === 'pc2'){
            if(!(tempCurrentPage === currentSecond)){
                setCurrentPage(currentSecond);
            }
        } else if(val === 'pc3'){
            if(!(tempCurrentPage === currentThird)){
                setCurrentPage(currentThird);
                if(currentThird >= 3){
                    if(currentThird === numPages){
                        setPcThird(numPages);
                        setPcSecond(numPages-1);
                        setPcFirst(numPages-2);
                    } else if(currentThird < numPages){
                        setPcSecond(currentThird);
                        setPcFirst(currentThird-1);
                        setPcThird(currentThird+1);
                    }
                }
            }
        }
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
                            {
                                searchType !== 'init' && props.resultsList.results && resultPages.length >= 1 &&
                                <>
                                    <SearchResults
                                        searchKey={props.searchKey}
                                        resultsList={props.resultsList.results}
                                        resultPages={resultPages}
                                        currentPage={currentPage}
                                        findAnimeById={props.findAnimeByID}
                                    />
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="page-control">
                                                <div className="row">
                                                    <div className="col-3 text-right">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary pcFirstBtn"
                                                            onClick={() => updatePageControls('first')}>
                                                            First
                                                        </button>
                                                    </div>
                                                    <div className="col-1 text-right">
                                                        <i className="fa fa-caret-left page-arrow fa-2x"
                                                           onClick={() => updatePageControls('left')}></i>
                                                    </div>
                                                    <div className="col-4 text-center">
                                                        <div className="row">
                                                            <div className="col-4 text-center">
                                                                <span
                                                                    className={`btn pcNum ${currentPage === pcFirst ? 'active' : 'inactive'}`}
                                                                    onClick={() => updatePageControls('pc1')}>
                                                                    {pcFirst}</span>
                                                            </div>
                                                            {
                                                                pcSecond > 0 &&
                                                                <>
                                                                    <div className="col-4 text-center">
                                                                        <span
                                                                            className={`btn pcNum ${currentPage === pcSecond ? 'active' : 'inactive'}`}
                                                                            onClick={() => updatePageControls('pc2')}>
                                                                            {pcSecond}
                                                                        </span>
                                                                    </div>
                                                                </>
                                                            }
                                                            {
                                                                pcThird > 0 &&
                                                                <>
                                                                    <div className="col-4 text-center">
                                                                        <span
                                                                            className={`btn pcNum ${currentPage === pcThird ? 'active' : 'inactive'}`}
                                                                            onClick={() => updatePageControls('pc3')}>
                                                                            {pcThird}
                                                                        </span>
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-1 text-left">
                                                        <i className="fa fa-caret-right page-arrow fa-2x"
                                                           onClick={() => updatePageControls('right')}></i>
                                                    </div>
                                                    <div className="col-3 text-left">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary pcLastBtn"
                                                            onClick={() => updatePageControls('last')}>
                                                            Last
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 pt-5 text-center">
                                                        <p>({resultPages.length} pages total)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
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