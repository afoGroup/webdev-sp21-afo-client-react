import React from "react";
import '../../styles/afo-group-discover.css';

const DiscoverCard = ({group}) => {
    return(
        <>
            <div className="card afo-card-style">
                <img className="card-img-top afo-card-img" src={group.pictureURL} alt="Group Image"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text afo-card-info">{group.description}</p>
                        <a href={`/details/group/${group._id}`} className="btn btn-primary">View Group</a>
                    </div>
            </div>
        </>
    )
};

export default DiscoverCard;