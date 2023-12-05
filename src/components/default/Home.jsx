import React, {useEffect, useState} from "react";
import './Home.css'

import { db } from "../../firebase";
import { onValue, ref} from "firebase/database";
import StoryList from "../story-list/story-list";
import search from "../assets/search.png"




const Default = ({ name='', userEmail='' }) => {
 
    const [dataList, setDataList] = useState([])
    const [filterName, setFilterName] = useState('')
    
    function get(){
      //console.log('get fun called 1')
        
        const query = ref(db,"post");
        //console.log('get fun called 2')
        
        return onValue(query, (snapshot) => {
          //console.log('get fun called 3')
          const data = snapshot.val();
          //console.log('get fun called 4')
          
          
          if (snapshot.exists()) {
            //console.log('get fun called 5')
           setDataList(data)
           //console.log(data)
          }
          else
          console.log("no data");
        });
        
     }                            

    useEffect(() => {
        get()
    }, [])

  return(
       <div className="home">
        
        <div className="home-header">-Top Stories-</div>
        <div className="filter-search">
        <img className="search-icon" style={{width: 35, height: 35,padding:5}} src={search} alt="Find" />
          <input value={filterName} onChange={e => setFilterName(e.target.value)} placeholder='Search'/>
        </div>
       
        <StoryList dataList={dataList} filterName={filterName} userEmail={userEmail}/>
   </div> 
  )
}

export default Default