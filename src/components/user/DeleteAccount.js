import React from 'react'
import { Link } from 'react-router-dom'

const DeleteAccount = () => {
    return (
        <>
            <div className="delete-account">
                <h2>Delete Account</h2>
                <p>Delete any and all content you have, such as articles, comments, or your reading list. Allow your username to become available to anyone.</p>
                <button>Delete Confirm</button>
                <div>
                    <Link>Contact us</Link>
                    <span> if you have any questions.</span>
                </div>
            </div>
        </>
    )
}

export default DeleteAccount
