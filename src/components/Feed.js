import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import Tags from './Tags'
// import SortBy from '../../components/SortBy'
// import TrendingPost from '../../components/TrendingPost'
import Sidebar from './Sidebar'
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { formatDistanceToNow } from 'date-fns'
import Spinner from './Spinner';
import { toast } from 'react-toastify';

const Feed = () => {

  const [loading, setLoading] = useState(true);
  const [postLists, setPostList] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
      let list = [];
      let tags = [];
      snapshot.docs.forEach((doc) => {
        tags.push(...doc.get("tags"));
        list.push({ id: doc.id, ...doc.data() });
      });
      const uniqueTags = [...new Set(tags)];
      setTags(uniqueTags)
      setPostList(list);
      setLoading(false);
    },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        setLoading(true)
        const postDoc = (doc(db, "posts", id));
        await deleteDoc(postDoc);
        toast.success("Post deleted successfully");
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="main-section">
        <div className="main">
          <Sidebar />
          <div className="container two-row">
            <div>
              {/* <SortBy /> */}
              {postLists.reverse().map((post) => {
                return <div key={post.id}>
                  <Posts
                    id={post.id}
                    userPhoto={post.author.userProfile}
                    username={post.author.name}
                    title={post.postTitle}
                    imgUrl={post.imgUrl ? post.imgUrl : ""}
                    content={post.postContent ? post.postContent.slice(0, 120) : ""}
                    postUrl={`/post/${post.id}`}
                    date={formatDistanceToNow(post.createdAt)}
                    tag={post.tags}
                    userId={post.author.id}
                    handleDelete={handleDelete}
                  />
                </div>
              })}
            </div>
            <Tags tags={tags}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed
