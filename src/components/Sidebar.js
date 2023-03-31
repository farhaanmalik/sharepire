import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiHome3Line, RiCompass3Line, RiInformationLine, RiQuestionLine, RiLockLine, RiTodoLine } from "react-icons/ri";
import { MdOutlineDynamicFeed } from "react-icons/md"

const Sidebar = () => {

    return (
        <>
            <div className="sidebar-menu">
                <aside className="side-left" id="side-menu">
                    {/* <div className="side-logo">
                        <NavLink to="/" className="logo">Coding<span>Hints</span></NavLink>
                        <span id="closeMenu">&times</span>
                    </div> */}
                    <ul className="menu">
                        <NavLink to="/" className="sideBtn"><RiHome3Line className='sidebar-icon' /> Home</NavLink>
                        {/* <NavLink to="/" className="sideBtn"><MdOutlineDynamicFeed className='sidebar-icon' /> My Feed</NavLink> */}
                        <NavLink to="/explore" className="sideBtn"><RiCompass3Line className='sidebar-icon' />Explore</NavLink>
                        <NavLink to="/about-us" className="sideBtn"><RiInformationLine className='sidebar-icon' /> About Us</NavLink>
                        <NavLink to="/faq" className="sideBtn"><RiQuestionLine className='sidebar-icon' /> FAQ</NavLink>
                        <NavLink to="/privacy-policy" className="sideBtn"><RiLockLine className='sidebar-icon' /> Privacy Policy</NavLink>
                        <NavLink to="/terms-of-use" className="sideBtn"><RiTodoLine className='sidebar-icon' /> Terms of Use</NavLink>
                    </ul>
                    <div className="sidebar-end">
                        <div className="social-link">
                            <div className="fb s-link">
                                <a href='#'><i className="fa-brands fa-twitter"></i></a>
                            </div>
                            <div className="fb s-link">
                                <a href='#'><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                            <div className="fb s-link">
                                <a href='#'><i className="fa-brands fa-square-facebook"></i></a>
                            </div>
                        </div>
                        <div className="ft-end">
                            <p><i className="fa-regular fa-copyright"></i> 2022 <b>CodingHints</b></p>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Sidebar
