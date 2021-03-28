import React from "react";

const AnimeResult = ({anime}) => {
    return(
        <div className="row">
            <div className="col-12">

                <div className="anime-result-container">
                    <div className="row">
                        <div className="col">
                            <h6>{anime.title}</h6>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default AnimeResult;