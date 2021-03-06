import React, {useState} from "react";

const SearchForm= (props) => {
    const [animeTab, setAnimeTab] = useState(true);
    const [groupTab, setGroupTab] = useState(false);
    const [userTab, setUserTab] = useState(false);
    const [animeTabOption, setAnimeTabOption] = useState('title');

    const tabClicked = (tab) => {
        if(tab === 'anime'){
            setAnimeTab(true);
            setGroupTab(false);
            setUserTab(false);
        } else if(tab === 'group'){
            setAnimeTab(false);
            setGroupTab(true);
            setUserTab(false);
        } else if(tab === 'user'){
            setAnimeTab(false);
            setGroupTab(false);
            setUserTab(true);
        }
    };

    return(
        <div className="row">
            <div className="col-12 py-3">
                <div className="search-box">
                    <div className="row box-tab-row">
                        <div className={`col-4 box-tab box-tab-12 ${animeTab? 'active' : 'inactive'}`}
                             onClick={() => tabClicked('anime')}
                             id="animeTab">
                            <h6 className="btn tab-text"
                                onClick={() => tabClicked('anime')}>
                                Anime
                            </h6>
                        </div>
                        <div className={`col-4 box-tab box-tab-12 ${groupTab ? 'active' : 'inactive'}`}
                             onClick={() => tabClicked('group')}
                             id="groupTab">
                            <h6 className="btn tab-text"
                                onClick={() => tabClicked('group')}>
                                Group
                            </h6>
                        </div>
                        <div className={`col-4 box-tab ${userTab ? 'active' : 'inactive'}`}
                             onClick={() => tabClicked('user')}
                             id="userTab">
                            <h6 className="btn tab-text"
                                onClick={() => tabClicked('user')}>
                                User
                            </h6>
                        </div>
                    </div>
                    <div className="row box-form-row">
                        {
                            animeTab &&
                            <div className="col box-form">
                                <div className="row pb-4 pt-1">
                                    <div className="col-6 text-center py-2">
                                        <button
                                            type="button"
                                            className="btn btn-secondary anime-form-btn"
                                            value="searchTitleBtn"
                                            onClick={() => setAnimeTabOption('title')}>
                                            Search by Title
                                        </button>
                                    </div>
                                    <div className="col-6 text-center py-2">
                                        <button
                                            type="button"
                                            className="btn btn-secondary anime-form-btn"
                                            value="searchImageBtn"
                                            onClick={() => setAnimeTabOption('image')}>
                                            Search by Image
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col input-form">
                                        {
                                            animeTabOption === 'title' &&
                                            <>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label>Input the <strong>anime title</strong> below:</label>
                                                        <br/>
                                                        <input type="text"
                                                               name="animeTitleInput"
                                                               value={props.searchTitle}
                                                               className="text-input-box"
                                                               onChange={(event) => {
                                                                   props.setSearchTitle(event.target.value)
                                                               }}/>
                                                    </div>
                                                </div>
                                                {
                                                    props.titleAlert &&
                                                    <>
                                                        <div className="alert alert-warning mb-0 mt-2" role="alert">
                                                            Need at least 3 characters for search
                                                        </div>
                                                    </>
                                                }

                                                <div className="row mt-5">
                                                    <div className="col-12 text-center">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary btn-block search-btn"
                                                            value="searchAnimeTitle"
                                                            onClick={() => {props.searchClicked('title')}}>
                                                            Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {
                                            animeTabOption === 'image' &&
                                            <>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label>Input the <strong>image URL</strong> below:</label>
                                                        <br/>
                                                        <input type="text"
                                                               name="animeImageInput"
                                                               value={props.searchURL}
                                                               className="text-input-box"
                                                               onChange={(event) => {
                                                                   props.setSearchURL(event.target.value)
                                                               }}/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 text-center">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary btn-block search-btn mt-5"
                                                            value="searchAnimeURL"
                                                            onClick={() => {props.searchClicked('url')}}>
                                                            Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            groupTab &&
                            <div className="col box-form">
                                <div className="row pt-5">
                                    <div className="col input-form">
                                        <div className="row">
                                            <div className="col-12">
                                                <label>Input the <strong>group name</strong> below:</label>
                                                <br/>
                                                <input type="text"
                                                       name="groupNameInput"
                                                       value={props.searchTitle}
                                                       className="text-input-box"
                                                       onChange={(event) => {
                                                           props.setSearchTitle(event.target.value)
                                                       }}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary btn-block search-btn mt-5"
                                                    value="searchGroup"
                                                    onClick={() => {props.searchClicked('group')}}>
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            userTab &&
                            <div className="col box-form">
                                <div className="row pt-5">
                                    <div className="col input-form">
                                        <div className="row">
                                            <div className="col-12">
                                                <label>Input the <strong>username</strong> below:</label>
                                                <br/>
                                                <input type="text"
                                                       name="userNameInput"
                                                       value={props.searchTitle}
                                                       className="text-input-box"
                                                       onChange={(event) => {
                                                           props.setSearchTitle(event.target.value)
                                                       }}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary btn-block search-btn mt-5"
                                                    value="searchUser"
                                                    onClick={() => {props.searchClicked('user')}}>
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SearchForm;