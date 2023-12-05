import React, { useState, useEffect } from 'react'
import { jsonData } from '../assets/utils/utils'
import { db } from '../../firebase';
import { onValue, ref} from "firebase/database";
import StoryList from '../story-list/story-list'
import './MyStories.css'
import search from "../assets/search.png"

function MyStories({ name='', userEmail='' }) {
  const [dataList, setDataList] = useState([])
  const [filterName, setFilterName] = useState('')
  
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
    <div className='my-stories'>
      <div className="my-stories-header">-My Stories-</div>
      <div className="filter-search" style={{display:"flex"}}>
      <img className="search-icon" style={{ width: 35, height: 35,padding:5}} src={search} alt="Find" />
          <input value={filterName} onChange={e => setFilterName(e.target.value)} placeholder='Search'/>
        </div>
        <StoryList dataList={dataList} filterName={filterName} userEmail={userEmail} filterEmail={true}/>
    </div>
  )
}

export default MyStories