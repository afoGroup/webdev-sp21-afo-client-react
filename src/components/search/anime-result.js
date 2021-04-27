import React from "react";
import {Link} from "react-router-dom";

const AnimeResult = (props) => {

    return(
        <div className="row anime-result-container my-5">
            <div className="col-12">
                <div className="row pt-3 result-header">
                    <div className="col-9">
                        <h4>
                            <Link className="result-header-title" to={`/details/anime/${props.anime.mal_id}`}>
                                {props.anime.title}
                            </Link>
                        </h4>
                    </div>
                    <div className="col-3 text-right">
                        <p className="afo-gray">{props.anime.rated}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-4">
                        <img
                            src={props.anime.image_url}
                            className="result-img"
                            alt={`Anime, ${props.anime.title}`}/>
                    </div>
                    <div className="col-6 col-md-8">
                        <p className="afo-black" >{props.anime.synopsis}
                        <Link className="result-read-more" to={`/details/anime/${props.anime.mal_id}`}>
                            (read more)
                        </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AnimeResult;