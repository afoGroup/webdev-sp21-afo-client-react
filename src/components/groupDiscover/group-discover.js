import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import '../../styles/afo-group-discover.css';
import DiscoverCard from "./discover-card";

const GroupDiscover = ({groupList}) => {

    let responsive = {
        largeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1555 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1555, min: 995 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 995, min: 0 },
            items: 1
        }
    };

    return(
        <div className="row discover-row">
            <div className="col-12 p-3">

                <div className="p-4">
                    <Carousel responsive={responsive}
                              showDots={true}
                              infinite={true}
                              renderButtonGroupOutside={true}
                              renderDotsOutside={true}
                              containerClass="carousel-container">
                        {
                            groupList && groupList.map((group, index) =>
                                <DiscoverCard group={group}/>
                            )
                        }
                    </Carousel>
                </div>

            </div>
        </div>
    );
};

export default GroupDiscover;