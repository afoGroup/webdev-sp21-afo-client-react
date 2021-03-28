import React from "react";
import {Link} from "react-router-dom";

const AnimeResult = ({anime}) => {
    return(
        <div className="row anime-result-container my-5">
            <div className="col-12">
                <div className="row pt-3 result-header">
                    <div className="col-9">
                        <h4> <Link className="result-header-title" to={`/anime/${anime.mal_id}`}> {anime.title} </Link>  </h4>
                    </div>
                    <div className="col-3 text-right">
                        <p className="afo-gray">{anime.rated}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-4">
                        <img src={anime.image_url} className="result-img"/>
                    </div>
                    <div className="col-6 col-md-8">
                        <p>{anime.synopsis}</p>
                    </div>
                </div>


            </div>
        </div>
    )
};

export default AnimeResult;