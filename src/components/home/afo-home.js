import React from 'react'
import AfoNavbar from "../navbar/afo-navbar";
import GroupDiscover from "../group-discover";
import FilterList from "../filter-list";

const AfoHome = () => {
    const filterList = ['ACTION', 'ADVENTURE', 'COMEDY', 'FANTASY', 'HORROR', 'THRILLER', 'ROMANCE', 'SCI_FI'];

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="afo-purple afo-header">AniFans Only</h1>
                                </div>
                            </div>
                            <GroupDiscover/>
                            <FilterList
                                filterList={filterList}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AfoHome;