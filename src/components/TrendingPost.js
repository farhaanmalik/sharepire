import React, {useState} from 'react'

const TrendingPost = () => {

    const [showAllPost, setShowAllPost] = useState("See all")

    const showAll = () =>{
        setShowAllPost("")
    }

    return (
        <div>
           <div className="side-right">
           <div className="trending category">
                <h3>Trending Post</h3>
                <div className="tr-post">
                    <div className="tr-box">
                        <a href="#">Lorem ipsum dolor Lorem, ipsum dolor. sit amet.</a>
                    </div>
                    <div className="tr-box">
                        <a href="#">Lorem ipsum dolor sit amet.</a>
                    </div>
                    <div className="tr-box">
                        <a href="#">Lorem ipsum dolor sit amet Lorem, ipsum..</a>
                    </div>
                    <div className="tr-box">
                        <a href="#">Lorem ipsum dolor sit amet.</a>
                    </div>
                    <div className="tr-box">
                        <a href="#">Lorem ipsum dolor sit amet.</a>
                    </div>
                    <div className={showAllPost ? "moreTr" : "moreTr active"}>
                        <div className="tr-box">
                            <a href="#">Lorem ipsum dolor Lorem, ipsum dolor. sit amet.</a>
                        </div>
                        <div className="tr-box">
                            <a href="#">Lorem ipsum dolor sit amet.</a>
                        </div>
                        <div className="tr-box">
                            <a href="#">Lorem ipsum dolor sit amet Lorem, ipsum..</a>
                        </div>
                        <div className="tr-box">
                            <a href="#">Lorem ipsum dolor sit amet.</a>
                        </div>
                        <div className="tr-box">
                            <a href="#">Lorem ipsum dolor sit amet.</a>
                        </div>
                    </div>
                    <div className="tr-box">
                        <button id="trBtn" onClick={showAll}>{showAllPost}</button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default TrendingPost
