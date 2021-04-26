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
                <br/>

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="afo-carousel-box">
                                <p>slide 1</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="afo-carousel-box">
                                <p>slide 2</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="afo-carousel-box">
                                <p>slide 3</p>
                            </div>
                        </div>

                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>

            </div>
        </div>
    );
};

export default GroupDiscover;