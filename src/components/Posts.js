import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../Firebase';

const Posts = ({
    id,
    userPhoto,
    username,
    title,
    imgUrl,
    content,
    postUrl,
    date,
    tag,
    userId,
    handleDelete
}) => {

    const [user] = useAuthState(auth)

    return (
        <>
            {/* <!-- all contents --> */}
            <div className="feed" key={id}>
                {/* <!-- user content  --> */}
                <article className="content">
                    <div className="user">
                        <div className="user-link">
                            <Link onClick={() => { toast.error("Sorry ! We are working on Profile page.") }}>
                                <img src={userPhoto} alt="" className="user-img" />
                            </Link>
                        </div>
                        <div className="date">
                            <Link className="user-name" onClick={() => { toast.error("Sorry ! We are working on Profile page.") }}>{username}</Link>
                            <p>{date} ago</p>
                        </div>
                    </div>
                    <Link to={postUrl} className="post" id="article">
                        <div className="content-img">
                            <img src={imgUrl ? imgUrl : "./images/user-img.png"} alt="" />
                        </div>
                        <div className="user-content">
                            <h2 className="content-title">{title}
                            </h2>
                            {/* <p id="readTime"><i className="fa-brands fa-readme"></i>  5min read</p> */}
                            <p className="content-para">{content}....</p>
                        </div>
                    </Link>
                    {user && userId === user.uid &&
                        <div div className="actions">
                            <div>
                                <p className='delete-action' onClick={() => handleDelete(id)}>Delete</p>
                            </div>
                            <Link to={`/update-post/${id}`}>
                                <div>
                                    <p className='edit-action'>Edit</p>
                                </div>
                            </Link>
                        </div>
                    }
                </article>
            </div>
        </>
    )
}

export default Posts
