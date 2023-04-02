import React from 'react'
import "./Result.css"

const Search = () => {
  return (
    <>
      <div className="md-search-bar">
        <form action="" id="searchForm">
          <label htmlFor=""><i className="fa-solid fa-magnifying-glass"></i></label>
          <input type="text" id="searchInp" placeholder="Search articles or tags....." />
        </form>
      </div>
    </>
  )
}

export default Search
