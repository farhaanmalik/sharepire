// import React, { useState, useEffect } from 'react'
// import DeleteAccount from './DeleteAccount'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, db, storage } from '../../Firebase';
// import { useNavigate } from 'react-router-dom';
// import { addDoc, collection } from 'firebase/firestore';
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import Footer from '../Footer';
// import { toast } from 'react-toastify';

// const EditProfile = () => {

//   const [user] = useAuthState(auth)

//   const [form, setForm] = useState();
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState("")
//   const [username, setUserName] = useState("")
//   const [location, setLocation] = useState("")
//   const [bio, setBio] = useState("")
//   const [progress, setProgress] = useState(null);

//   useEffect(() => {
//     const uploadFile = () => {
//       const storageRef = ref(storage, file.name);
//       const uploadTask = uploadBytesResumable(storageRef, file);
//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log("Upload is " + progress + "% done");
//           setProgress(progress);
//           switch (snapshot.state) {
//             case "paused":
//               console.log("Upload is paused");
//               break;
//             case "running":
//               console.log("Upload is running");
//               break;
//             default:
//               break;
//           }
//         },
//         (error) => {
//           console.log(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
//             // toast.info("Image upload to firebase successfully");
//             setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
//           });
//         }
//       );
//     };

//     file && uploadFile();
//   }, [file]);

//   const postsCollectionRef = collection(db, "users")
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (name === "" || username === "" || location === "" || bio === "") {
//       toast.error("Please fill the fields !");
//     }
//     else if (file == null) {
//       toast.error("Please select the profile image.")
//     }
//     else {
//       try {
//         await addDoc(postsCollectionRef, {
//           ...form,
//           userId: user.uid,
//           name,
//           username,
//           location,
//           bio,
//         })
//         navigate(`/profile/${user.uid}`);
//         toast.success("Your profile updated successfully !");
//       } catch (error) {
//         console.log(error);
//         toast.error("Not updated, Try again !")
//       }
//     }

//   }

//   const navigate = useNavigate()
//   const leaveEdit = () => {
//     navigate(`/profile/${user.uid}`)
//   }


//   return (
//     <>
//       <div className="container">
//         <div className="editProfile-section">
//           <div className="row">
//             <h2>Edit Profile</h2>
//             <button onClick={leaveEdit}>Back</button>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="editProfileBox">
//               <h3>User Info</h3>
//               <div className='editBox'>
//                 <label htmlFor="profileImage">Profile Image</label>
//                 <div className='row'>
//                   <img src="../images/user-img.png" alt="" className="user-img" />
//                   <input type="file" className='profileImg' onChange={(e) => setFile(e.target.files[0])} />
//                 </div>
//               </div>
//               <div className='editBox'>
//                 <label htmlFor="name">Name</label>
//                 <input type="text" name="fullname" value={name} onChange={(event) => { setName(event.target.value) }} />
//               </div>
//               <div className='editBox'>
//                 <label htmlFor="username">Username</label>
//                 <input type="text" name="username" value={username} onChange={(event) => { setUserName(event.target.value) }} />
//               </div>
//               {/* <div className='editBox'>
//                 <label htmlFor="email">Email</label>
//                 <input type="email" name="email" value={user.email} />
//               </div> */}
//             </div>
//             <div className="editProfileBox">
//               <h3>More Details</h3>
//               <div className='editBox'>
//                 <label htmlFor="location">Country</label>
//                 <input type="text" name="location" value={location} onChange={(event) => { setLocation(event.target.value) }} />
//               </div>
//               <div className='userBio editBox'>
//                 <label htmlFor="bio">Bio</label>
//                 <textarea name="bio" id="bio" rows="4" value={bio} onChange={(event) => { setBio(event.target.value) }} />
//               </div>
//             </div>
//             {/* <div className="editProfileBox">
//               <h3>Add Socials Links</h3>
//               <div className='editBox'>
//                 <label htmlFor="fblink">Facebook</label>
//                 <input type="text" name="fblink" />
//               </div>
//               <div className='editBox'>
//                 <label htmlFor="twitterlink">Twitter</label>
//                 <input type="text" name="twitterlink" />
//               </div>
//             </div> */}
//             <button id='addProfile'>Save Profile Info</button>
//           </form>
//         </div>
//         <Footer />
//       </div>
//     </>
//   )
// }

// export default EditProfile
