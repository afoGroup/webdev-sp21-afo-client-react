import React, {useEffect, useState} from 'react'
import AfoNavbar from "../navbar/afo-navbar";
import GroupDiscover from "../groupDiscover/group-discover";
import FilterList from "../filter-list";
import animeGenres from "../../constants/genre-id";
import groupService from "../../services/group-service";


const AfoHome = (props) => {
    const filterList = [animeGenres.ACTION, animeGenres.ADVENTURE, animeGenres.COMEDY, animeGenres.FANTASY,
        animeGenres.HORROR, animeGenres.THRILLER, animeGenres.ROMANCE, animeGenres.SCI_FI];

    const [groupList, setGroupList] = useState([]);

    useEffect(() => {
        groupService.findAllGroups().then((groups) => setGroupList(groups));
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="afo-purple afo-header my-4">AniFans Only</h1>
                                </div>
                            </div>
                            <GroupDiscover groupList={groupList}/>
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