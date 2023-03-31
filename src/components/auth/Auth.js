import React, { useEffect, useRef, useState } from 'react';
import "../user/profile.css"
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../Firebase';
import { signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';

const Auth = () => {

    const [signOpen, setSignOpen] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setSignOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [])


    let navigate = useNavigate();

    const signupWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user)
            navigate(`/`)
            toast.success("Login Succuessfully")
        } catch (error) {
            console.log(error)
        }
    }

    

    return (
        <div>
            <div className="account" ref={menuRef}>
                <div className="sign-logo" onClick={() => { setSignOpen(!signOpen) }}>
                    <span className='user-icon'><i className="fa-regular fa-user"></i></span>
                    <span>Login / Register</span>
                </div>

                <div className={signOpen ? "toggle-open active" : "toggle-open"}>
                    <p>Login or Signup with</p>
                    <div className="sign-link">
                        <Link className="link-box" onClick={signupWithGoogle} ><img src="./images/google.png" alt="google" /> Google</Link>
                        <Link className="link-box"><img src="./images/facebook.png" alt="facebook" /> Facebook</Link>
                        {/* <Link className="link-box"><img src="./images/github.png" alt="github" /> Github</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
