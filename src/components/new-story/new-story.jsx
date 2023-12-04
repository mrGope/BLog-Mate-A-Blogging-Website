import React, { useState } from 'react'
import './new-story.css'
import { db } from "../../firebase";
import { onValue, ref} from "firebase/database";
function NewStory({ name, useemail}) {
    function handleSubmit(e) {
        e.preventDefault()

    }
    const [storyTitle, setStoryTitle] = useState('')
    const [storyDescription, setStoryDescription] = useState('')
    const [tag, setTag] = useState('')
    const [storyImage, setStoryImage] = useState('')
    function handleTitleChange(e) {
        setStoryTitle(e.target.value)
    }
    function handleDescriptionChange(e) {
        console.log('calling desc')
        if(e.target.value.trim().split().length>=300) {
            return;
        }
        setStoryDescription(e.target.value)
    }
    function handleFileChange(e) {
        setStoryTitle(e.target.value)
    }
  return (
    <div className='new-story'>
        <span className="new-story-header">- Publish new story -</span>
        <form className='container new-story-form'>
                <label>Story Title</label>
                <input type='text' value={storyTitle} className='input-field' onChange={e => handleTitleChange(e)}/>
                <label>Story Description</label>
                <textarea rows={8} value={storyDescription} onChange={(e) => handleDescriptionChange(e)}/>
                <label>One image</label>
                <input type='file' onChange={e => handleFileChange(e)}/>
                <div className="tags">
                    <label>Tags : </label>
                    <span className={tag==='Entertainment' ? 'tag active-tag' : 'tag'} onClick={() => setTag('Entertainment')}>Entertainment</span>
                    <span className={tag==='Education' ? 'tag active-tag' : 'tag'} onClick={() => setTag('Education')}>Education</span>
                    <span className={tag==='Technology' ? 'tag active-tag' : 'tag'} onClick={() => setTag('Technology')}>Technology</span>
                    <span className={tag==='Sport' ? 'tag active-tag' : 'tag'} onClick={() => setTag('Sport')}>Sport</span>
                </div>
                <button onClick={(e) => handleSubmit(e)} className='new-story-publish'>Publish</button>
            </form>
    </div>
  )
}

export default NewStory