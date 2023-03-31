import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-section">
                    <div className="footer-top">
                        <Link to="/">SharePire</Link>
                        <span> - A constructive and inclusive social network for the peoples where they can share their ideas with the World community. With you every step of your journey.</span>
                    </div>
                    <div className="footer-mid">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/explore">Explore Tags</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-use">Terms of Use</Link></li>
                        </ul>
                    </div>
                    <div className="footer-end">
                        <p>© Sharepire <span>{new Date().getFullYear()}</span>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
