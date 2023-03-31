import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { RiEdit2Line, RiNotification3Line } from 'react-icons/ri'
import { auth } from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const UserOnNav = () => {

    const [user] = useAuthState(auth)

    const [userTop, setUserTop] = useState(false);
    let userRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!userRef.current.contains(e.target)) {
                setUserTop(false);
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [])


    const navigate = useNavigate();
    const logOut = () => {
        if (window.confirm("Do you want to Logout ?")) {
            signOut(auth);
            toast.success("You are logout now !")
            navigate("/")
        }
    }

    return (
        <div>
            <div className='userTop'>
                <div className="createPostBtn">
                    <Link to="/create-post">
                        <span>Create Post</span>
                        <RiEdit2Line className='create-post-icon' />
                    </Link>
                </div>
                <div className='notify'>
                    <Link onClick={()=>{
                        toast.error("Sorry ! We are working on notification page.")
                    }} ><RiNotification3Line className='notify-icon' /></Link>
                </div>
                <div className='userToggle' ref={userRef} onClick={() => setUserTop(!userTop)}>
                    <img src={user.photoURL ? user.photoURL : "./images/user-img.png"} alt={user.displayName} className="user-img" />
                    <ul className={userTop ? "active" : ""}>
                        <li>{user.displayName}</li>
                        {/* <li><Link to={`/profile/${user.uid}`}>Profile</Link></li>
                        <li><Link to={`/edit-profile/${user.uid}`}>Edit Profile</Link></li> */}
                        <li><Link to="/create-post">Create Post</Link></li>
                        <li onClick={logOut}>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserOnNav
