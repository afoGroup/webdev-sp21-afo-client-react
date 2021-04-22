import React from "react";

const Post = ({post}) => {
    return(
        <div className="row">
            <div className="col-12 post-container">
                <div className="post-box">
                    <div className="row">
                        <div className="col-6">
                            <p>
                                <a className="afo-purple" href={`/profile/${post.userId}`}>
                                    {post.username}
                                </a>
                            </p>
                        </div>
                        <div className="col-6 text-right">
                            <p>{post.date}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>{post.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Post;