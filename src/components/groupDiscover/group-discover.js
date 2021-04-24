import React from "react";
import '../../styles/afo-group-discover.css';

const GroupDiscover = ({groupList}) => {

    return(
        <div className="row discover-row">
            <div className="col-12">

                <div className="row">
                    <div className="col-12">

                        {
                            groupList && groupList.map((group, index) =>
                                <p key={index}>{group.title}</p>
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default GroupDiscover;