import React from 'react'
import './story-list.css'
import { useNavigate } from 'react-router-dom'

function StoryList({ dataList=[], filterName='', userEmail='', filterEmail=false }) {
    const navigate = useNavigate()
    function handleOpenStory(storyId) {
        const url = '/story/' + storyId;
        navigate(url)
    }
    function handleEditStory(storyId) {
        const url = '/edit-story/' + storyId;
        navigate(url)
    }
  return (
    <div className="container">
            {
                dataList?.map((story, storyIndex) => {
                    if(storyIndex%2===0 && (filterEmail===false && story.storyTitle.includes(filterName)) || (filterEmail===true && story.userEmail.includes(userEmail) && story.storyTitle.includes(filterName))) {
                        return (    
                            <div className="container home-story">
                                <div className="home-story-description">
                                    <span className="home-story-home-title">{story.storyTitle}</span>
                                    <span className="home-story-home-by-username">by {story.userName}</span>
                                    <br />
                                    <span className='home-story-tag'>Tag : {story.tag ? story.tag : 'sometag'}</span>
                                    <span className="home-story-home-description">{story.storyDescription}</span>
                                    {
                                        story.userEmail === userEmail ?
                                        <div className="home-story-buttons">
                                            <button onClick={() => handleOpenStory(story.id)}>Open</button>
                                            <button onClick={() => handleEditStory(story.id)}>Edit/Delete</button>
                                        </div> :
                                        <div className="home-story-buttons">
                                            <button onClick={() => handleOpenStory(story.id)}>Open</button>
                                        </div>
                                    }
                                </div>
                                <div className="home-story-image">
                                    <img src={story.storyImageLink} alt="story image"/>
                                </div>
                                
                            </div>
                        )
                    }
                    if(storyIndex%2!==0 &&(filterEmail===false && story.storyTitle.includes(filterName)) || (filterEmail===true && story.userEmail.includes(userEmail) && story.storyTitle.includes(filterName))) {
                        return (    
                            <div className="container home-story">
                                <div className="home-story-image">
                                    <img src={story.storyImageLink} alt="story image"/>
                                </div>
                                <div className="home-story-description">
                                    <span className="home-story-home-title">{story.storyTitle}</span>
                                    <span className="home-story-home-by-username">by {story.userName}</span>
                                    <br />
                                    <span className='home-story-tag'>Tag : {story.tag ? story.tag : 'sometag'}</span>
                                    <span className="home-story-home-description">{story.storyDescription}</span>
                                    {
                                        story.userEmail === userEmail ?
                                        <div className="home-story-buttons">
                                            <button onClick={() => handleOpenStory(story.id)}>Open</button>
                                            <button onClick={() => handleEditStory(story.id)}>Edit/Delete</button>
                                        </div> :
                                        <div className="home-story-buttons">
                                            <button onClick={() => handleOpenStory(story.id)}>Open</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    } return null
                })
            }
        </div>
  )
}

export default StoryList