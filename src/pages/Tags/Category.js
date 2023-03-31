import React, {useState, useEffect} from "react";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { collection, onSnapshot,} from 'firebase/firestore';
import { db } from "../../Firebase"; 
import Spinner from '../../components/Spinner';
// import TrendingPost from "../../components/TrendingPost";

const Category = () => {

  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
      let tags = [];
      snapshot.docs.forEach((doc) => {
        tags.push(...doc.get("tags"));
      });
      const uniqueTags = [...new Set(tags)];
      setTags(uniqueTags)
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

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="main-section">
        <div className="main">
          <Sidebar />
          <div className="container two-row">
            <div className="explore-section">
              <div className="content" style={{ margin: 0, marginBottom: 10 }}>
                <div className="all-category">
                  <h1 className="title-head">Explore Tags</h1>
                  <p className="explore-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, impedit non, similique, alias doloremque iste
                    voluptatem
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="all-category">
                  <h1 className="title-head">Popular Tags</h1>
                  {/* <hr className="hr" /> */}
                  <div className="tags">
                    {tags?.map((tag, index) => (
                      <p className="tagBox" key={index}>
                        <Link>#{tag}</Link>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <Footer />
            </div>
            {/* <TrendingPost /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
