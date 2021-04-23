import React from "react";
import '../../styles/afo-group-discover.css';

const GroupDiscover = ({groupList}) => {

    return(
        <div className="row discover-row">
            <div className="col-12">

                <div className="row">
                    <div className="col-12">

                        <div id="cardCarousel" className="carousel slide" data-ride="carousel">

                            <ol className="carousel-indicators">
                                <li data-target="#cardCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#cardCarousel" data-slide-to="1"></li>
                                <li data-target="#cardCarousel" data-slide-to="2"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <p>ITEM 1</p>
                                </div>
                                <div className="carousel-item">
                                    <p>ITEM 2</p>
                                </div>
                                <div className="carousel-item">
                                    <p>ITEM 3</p>
                                </div>
                            </div>

                            <a className="carousel-control-prev"
                               href="#cardCarousel"
                               role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next"
                               href="#cardCarousel"
                               role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default GroupDiscover;