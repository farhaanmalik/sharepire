import React from 'react'

const SortBy = () => {
    return (
        <div>
            <div className="sortby">
                <button className="sortbtn sort-active"><i className="fa-regular fa-star"></i> Featured</button>
                <button className="sortbtn"><i className="fa-regular fa-clock"></i> Recent</button>
            </div>
        </div>
    )
}

export default SortBy
