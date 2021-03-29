import React from "react";
import AnimeResult from "./anime-result";

const SearchResults= (props) => {

    return(
        <div className="row">
            <div className="col-12">
                <div className="row my-4">
                    <div className="col-12 text-center">
                        <h4 className="afo-purple afo-header">
                            {props.resultsList.length} Results
                            {
                                (props.searchKey !== 'url' && props.searchKey !== 'id') &&
                                <>
                                    {` for "`}{props.searchKey}"
                                </>
                            }
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {
                            props.resultPages[props.currentPage-1].map((anime,index) =>
                                <AnimeResult
                                    key={index}
                                    anime={anime}
                                />
                            )
                        }
                    </div>
                </div>


            </div>
        </div>
    )
};

export default SearchResults;