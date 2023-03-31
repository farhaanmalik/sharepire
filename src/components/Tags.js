import React from "react";
import { Link } from "react-router-dom";

const Tags = ({ tags }) => {
  return (
    <>
      <aside>
        <div className="side-right">
          <div className="category">
            <h3>Popular Tags</h3>
            <div className="catg-tag">
              {tags?.map((tag, index) => (
                <p className="ct-tag" key={index}>
                  <Link><span>#</span>{tag}</Link>
                </p>))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Tags;
