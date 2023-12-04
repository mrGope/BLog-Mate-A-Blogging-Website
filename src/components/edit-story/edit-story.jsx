import React, { useState, useEffect } from 'react'
import './edit-story.css'
import { db } from '../../firebase';
import { onValue, ref} from "firebase/database";
import { useParams } from 'react-router-dom';

function EditStory({ name, useemail}) {
    const [dataList, setDataList] = useState([])
    const params = useParams()
    function handleSubmit(e) {
        e.preventDefault()
        //on clicking publish
    }
    function handleDelete(e) {
        e.preventDefault()
        //on clicking delete
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
  
    function get(){
        
    const query = ref(db,"post");
    
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
       setDataList(data)
       for(let story of data) {
        //setting the edit object data inside the relevant variables
        if(story.id === params.id) {
            setStoryDescription(story.storyDescription)
            setStoryTitle(story.storyTitle)
            setTag(story.tag ? story.tag : '')
        }
       }
      }
      else
      console.log("no data");
    });
    
 }    
    useEffect(() => {
        get()
    }, [])
  return (
    <div>
        <span className="new-story-header">- Edit story -</span>
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
                <button onClick={(e) => handleSubmit(e)} className='new-story-publish'>Republish</button>
                <button onClick={(e) => handleDelete(e)} className='new-story-delete'>Delete</button>
            </form>
    </div>
  )
}

export default EditStory