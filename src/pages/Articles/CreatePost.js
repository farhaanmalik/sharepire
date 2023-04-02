import React, { useState, useEffect } from 'react';
import "./Post.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { useNavigate, useParams } from 'react-router-dom';
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { auth, db, storage } from '../../Firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';

const initialState = {
  postTitle: "",
  tags: [],
  postContent: "",
};

const CreatePost = () => {
  const [user] = useAuthState(auth)

  const { id } = useParams();

  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);

  const { postTitle, tags, postContent } = form;

  useEffect(() => {

    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTags = (tags) => {
    setForm({ ...form, tags });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tags && postTitle && postContent ) {
      if (!id) {
        try {
          await addDoc(collection(db, "posts"), {
            ...form,
            timestamp: serverTimestamp(),
            author: { name: user.displayName, id: user.uid, userProfile: user.photoURL },
            createdAt: Date.now()
          });
          toast.success("Post Uploaded successfully");
        } catch (err) {
          console.log(err);
        }
      } 
      else {
        try {
          await updateDoc(doc(db, "posts", id), {
            ...form,
            timestamp: serverTimestamp(),
            author: { name: user.displayName, id: user.uid, userProfile: user.photoURL },
          });
          toast.success("Post updated successfully");
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      return toast.error("All fields are mandatory to fill");
    }
    navigate("/");
  };


  //==== For Updating Post ==== 

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "posts", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
  };


  let navigate = useNavigate();
  const leavePost = () => {
    if (window.confirm("Do you want leave this post?")) {
      navigate("/")
    }
  }

  return (
    <>
      <div className="container">
        <div className="editor-section">
          <div className="row">
            <h2>{id ? "Update Post" : "Create a New Post"}</h2>
            <button onClick={leavePost}>Back</button>
          </div>
          <div className="postForm">
            <form onSubmit={handleSubmit}>
              <div className='editor-box'>
                <label htmlFor="postTitle">Post Title</label>
                <input
                  type="text"
                  name="postTitle"
                  value={postTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="editor-box">
                <label htmlFor="postImg">Cover Image</label>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              </div>
              <div className='editor-box'>
                <label htmlFor="desc">Post Details</label>
                <textarea
                  value={postContent}
                  name="postContent"
                  rows="8"
                  onChange={handleChange}
                />

              </div>
              <div className='editor-box'>
                <label htmlFor="tag">Tags</label>
                {/* <textarea name='category' placeholder='Examples: business, coding, or etc...' /> */}
                <ReactTagInput
                  tags={tags}
                  onChange={handleTags}
                />
              </div>
              <button id='addPost'>{id ? "Update Post" : "Upload Post"}</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default CreatePost
