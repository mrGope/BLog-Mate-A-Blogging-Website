import React, { useState, useEffect } from 'react'
import { jsonData } from '../assets/utils/utils'
import { db } from '../../firebase';
import { onValue, ref} from "firebase/database";
import StoryList from '../story-list/story-list'

function MyStories({ name='', userEmail='' }) {
  const [dataList, setDataList] = useState([])
  
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
    <StoryList dataList={dataList} userEmail={userEmail} filterEmail={true}/>
  )
}

export default MyStories