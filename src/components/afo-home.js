import React from 'react'
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
            <h2>Home Screen</h2>

            <div className="row">
                <ul>
                    <Link to="/search">
                        Search
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default HomeScreen