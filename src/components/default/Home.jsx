import React from "react";
import './Home.css'
import { jsonData } from "../assets/utils/utils";

const Default = ({ name='', userEmail='' }) => {
  return(
    <div className="home">
        <div className="container">
            <h2>Welcome {name}</h2>
        </div>

        <div className="container">
            {
                jsonData.map((story, storyIndex) => {
                    return (    
                        <div className="container home-story">
                            <div className="home-story-description">
                                <span className="home-story-home-title">{story.storyTitle}</span>
                                <span className="home-story-home-by-username">by {story.userName}</span>
                                <br />
                                <span className="home-story-home-description">{story.storyDescription}</span>
                                {
                                    story.userEmail === userEmail ?
                                    <div className="home-story-buttons">
                                        <button>Open Story</button>
                                        <button>Edit Story</button>
                                        <button>Delete Story</button>
                                    </div> :
                                    <div className="home-story-buttons">
                                        <button>Open Story</button>
                                    </div>
                                }
                            </div>
                            <div className="home-story-image">
                                <img src={story.storyImageLink} alt="story image"/>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
        <div className="fixed-new-blog" title="Share New Story">
        <span>New</span>
        </div>
   </div> 
  )
}

export default Default