import React from "react";
import AnimeResult from "./anime-result";

const SearchResults= (props) => {

    return(
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
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
                            props.resultsList.map((anime, index) =>
                                    <AnimeResult
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