import React from 'react';
import { Link } from 'react-router-dom';

const UserPost = () => {
  return (
    <>
      <div className="userAllPosts">
        <article className="userPost">
          <div className="date">
            <p>5 Feb, 2023</p>
          </div>
          <Link to="/user-post">
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit impedit, ullam.</h3>
          </Link>
        </article>
      </div>
    </>
  )
}

export default UserPost
