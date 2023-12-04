import React, { useState, useEffect} from 'react'
import './story.css'
import { db } from '../../firebase';
import { onValue, ref} from "firebase/database";
import { useParams } from 'react-router-dom';


function Story({ name='', userEmail='' }) {
  const [dataList, setDataList] = useState([])
  const params = useParams()
  console.log(params)
  
  function get(){
        
    const query = ref(db,"post");
    
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
       setDataList(data)
      }
      else
      console.log("no data");
    });
    
 }                            

useEffect(() => {
    get()
}, [])
  return (
    <div className='individual-story-container'>
      {
        dataList.map((story, storyIndex) => {
          if(story.id===params.id) {
            return (<div className='individual-story'>
              <div className='individual-story-title'>{story.storyTitle}</div>
              <div className='individual-story-username'>by {story.userName}</div>
              <div className='individual-story-image'>
                <img src={story.storyImageLink} alt='story-image'/>
              </div>
              <div className='individual-story-description'>{story.storyDescription}</div>
            </div>)
          }
          return null
        })
      }
    </div>
  )
}

export default Story