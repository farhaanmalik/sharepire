import React from 'react';
import AuthToggle from './auth/Auth';
import UserOnNav from './user/UserOnNav';
import { auth } from '../Firebase';
import { useAuthState } from "react-firebase-hooks/auth"

const Navbar = () => {

    const [user, loading] = useAuthState(auth)

    return (
        <>
            <div className="right-nav">
                <div className="search-bar">
                    <form action="" id="searchForm">
                        <label htmlFor=""><i className="fa-solid fa-magnifying-glass"></i></label>
                        <input type="text" id="searchInp" placeholder="Search articles or tags....." />
                    </form>
                </div>
                {!user && <AuthToggle />}
                {user && <UserOnNav />}
            </div>
        </>
    )
}

export default Navbar
