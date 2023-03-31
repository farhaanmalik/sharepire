import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiEdit2Line, RiSearchLine, RiNotification3Line, RiCompass3Line } from 'react-icons/ri'
import { MdOutlineDynamicFeed } from "react-icons/md";
import { toast } from 'react-toastify';

const BottomNav = () => {
    return (
        <div>
            <nav className="below-nav">
                <ul>
                    <NavLink to="/"><MdOutlineDynamicFeed /></NavLink>
                    <NavLink to="/search-result"><RiSearchLine /></NavLink>
                    <NavLink to="/create-post"><RiEdit2Line /></NavLink>
                    <NavLink to="/explore"><RiCompass3Line /></NavLink>
                    <Link onClick={()=>{toast.error("Sorry ! We are working on notification page.")}}><RiNotification3Line /></Link>
                </ul>
            </nav>
        </div>
    )
}

export default BottomNav
