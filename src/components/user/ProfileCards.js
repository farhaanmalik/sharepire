import React from 'react';


const ProfileCards = () => {

    return (
        <div>
            <div className="card-row">
                <div className="profile-card content user-social-link">
                    <div className="location">
                        <p><i className="fa-sharp fa-solid fa-location-dot"></i> India</p>
                    </div>
                    <div className="join">
                        <p><i className="fa-solid fa-calendar-days"></i> Joined at <span>10 Mar, 2023</span></p>
                    </div>
                    <div className="social-links">
                        <span><a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a></span>
                        <span><a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a></span>
                        <span><a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a></span>
                    </div>
                </div>
                <div className="profile-card content">
                    <h3>My Bio</h3>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita vitae itaque, perspiciatis neque quaerat temporibus odit ut enim reprehenderit!</p>
                    </div>
                </div>
                {/* <div className="profile-card content">
                    <h3>My Tech Stack</h3>
                    <ul className="card">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default ProfileCards
