import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Firebase'
import { formatDistanceToNow } from 'date-fns'
import Spinner from '../../components/Spinner'
import Footer from '../../components/Footer'
import { toast } from 'react-toastify'

const SinglePost = () => {

  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  const [post, setPost] = useState(null)

  useEffect(() => {
    id && getPostDetails();
  }, [id]);

  const getPostDetails = async () => {
    const docRef = doc(db, "posts", id);
    const postDetail = await getDoc(docRef);
    setPost(postDetail.data());
    setLoading(false)
  };

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="single-post">
        <div className='postTitle'>
          <h2>{post?.postTitle}</h2>
        </div>
        <div className="user">
          <div className="user-link">
            <Link onClick={() => { toast.error("Sorry ! We are working on Profile page.") }}>
              <img src={post?.author.userProfile} alt="" className="user-img" />
            </Link>
          </div>
          <div className="date">
            <Link onClick={() => { toast.error("Sorry ! We are working on Profile page.") }} className="user-name"><b>{post?.author.name}</b></Link>
            <p> {formatDistanceToNow(post.createdAt)} ago</p>
          </div>
        </div>
        <div className="post-img">
          <img src={post.imgUrl ? post.imgUrl : ""} alt="" />
        </div>
        <div className='postContent' >
          <p>{post?.postContent}</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SinglePost
