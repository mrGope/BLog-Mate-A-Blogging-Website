import React, { useState, useEffect } from 'react'
import './edit-story.css'
import { db,app } from "../../firebase";
import { onValue, ref,set} from "firebase/database";
import { useParams } from 'react-router-dom';

function EditStory({ name, userEmail}) {
    const [dataList, setDataList] = useState([])
    const params = useParams()
    function handleSubmit(e) {
        e.preventDefault()
        console.log(ID)
        set(ref(db, 'post/'+ID), {
            id:ID,
            userName: name,
            userEmail:userEmail ,
            storyTitle: storyTitle,
            tag:Tag,
            storyDescription: storyDescription,
           // storyImageLink: storyImage
          });
          console.log("edited")
    }
    function handleDelete(e) {
        e.preventDefault()
        set(ref(db, 'post/'+ID), {
            
           // storyImageLink: storyImage
          }).then(() => {
            console.log("Deleted");
            window.history.back();  
          }).catch((error) => {
            console.log("Deleted error");
          });
              
    }
    const [ID, setID] = useState(params.id)
    const [storyTitle, setStoryTitle] = useState('')
    const [storyDescription, setStoryDescription] = useState('')
    const [Tag, setTag] = useState('')
    function handleTitleChange(e) {
        setStoryTitle(e.target.value)
    }
    function handleDescriptionChange(e) {
        console.log('calling desc')
        if(e.target.value.trim().split(" ").length>=300) {
            return;
        }
        setStoryDescription(e.target.value)
    }
   
  
    function get(){
        
    const query = ref(db,"post");
    
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
       setDataList(data)
       //console.log(data)
       Object.keys(data).forEach(key => {
       // console.log(key);        // the name of the current key.
        //console.log(data[key]); // the value of the current key.
        if(key=== params.id) {
           // console.log(data[key])
            setID(data[key].id)
            setStoryDescription(data[key].storyDescription)
            setStoryTitle(data[key].storyTitle)
            setTag(data[key].tag !=null? data[key].tag : '')
            console.log(ID+" "+storyTitle+" "+storyDescription)
           
        }
      });
   
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
              {/*  <label>One image</label>
                <input type='text' onChange={e => handleFileChange(e)}/> */}
                <div className="tags">
                    <label>Tags : </label>
                    <span className={Tag==='Entertainment' ? 'tag active-tag' : 'tag'} onClick={() => setTag('Entertainment')}>Entertainment</span>
                    <span className={Tag==='Education' ? 'tag active-tag' : 'tag'} onClick={() => setTag('Education')}>Education</span>
                    <span className={Tag==='Technology' ? 'tag active-tag' : 'tag'} onClick={() => setTag('Technology')}>Technology</span>
                    <span className={Tag==='Sport' ? 'tag active-tag' : 'tag'} onClick={() => setTag('Sport')}>Sport</span>
                </div>
                <button onClick={(e) => handleSubmit(e)} className='new-story-publish'>Republish</button>
                <button onClick={(e) => handleDelete(e)} className='new-story-delete'>Delete</button>
            </form>
    </div>
  )
}

export default EditStory