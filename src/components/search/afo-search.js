import React from "react";
import AfoNavbar from "../navbar/afo-navbar";
import SearchForm from "./search-form";
import SearchResults from "./search-results";
import "../../styles/afo-search.css"

const AfoSearch = (props) => {

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
                            <SearchForm/>
                            <div className="row">
                                <div className="col-12 search-page-break"></div>
                            </div>
                            <SearchResults/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AfoSearch;