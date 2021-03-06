import React from "react";
import {Link} from "react-router-dom";
import "../styles/afo-simple-display.css";

const SimpleDisplay = ({imageURL, header, text, linkId, type}) => {

    return(
        <div className="row afo-simple-container">
            <div className="col-5 p-0">
                <div className="row">
                    <div className="col-12">
                        <img
                            src={imageURL}
                            className="afo-simple-img"
                            alt={`${header}`}/>
                    </div>
                </div>
            </div>
            <div className="col-7 afo-simple-info">
                <div className="row">
                    <div className="col-12">
                        <p className="afo-purple">{header}</p>
                        <p className="afo-simple-text">{text}</p>
                        {
                            type === 'group' &&
                            <Link className="btn btn-secondary" to={`/details/group/${linkId}`}>
                                View Group
                            </Link>
                        }
                        {
                            type === 'user' &&
                            <Link className="btn btn-secondary" to={`/profile/${linkId}`}>
                                View User
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SimpleDisplay;