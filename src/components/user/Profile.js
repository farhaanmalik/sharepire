import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import './profile.css'
import ProfileCards from './ProfileCards';
import UserPost from './UserPosts';
import Sidebar from '../Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase';
import Footer from '../Footer';

const Profile = () => {

  const [user] = useAuthState(auth)

  return (
    <>
      <div className="main-section">
        <div className="main">
          <Sidebar />
          <div className="container">
            <div className="user-box">
              <div className="profile-section">
                <div className="profile">
                  <img src="../images/user-img.png" alt="" />
                  <div className="profile-details">
                    <h2 className="profile-name">{user.displayName}</h2>
                    {/* <p className="profile-username"><span>@</span>farhaan05</p> */}
                  </div>
                </div>
                <div className="edit-link">
                  <Link to={`/edit-profile/${user.uid}`}><FiEdit className='edit-icon' /> Edit</Link>
                </div>
              </div>
              <ProfileCards />
              <div className="card-row">
                <div className="content" style={{ marginTop: 20 }}>
                  <h3>Recent Activity</h3>
                  <UserPost />
                  <UserPost />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
