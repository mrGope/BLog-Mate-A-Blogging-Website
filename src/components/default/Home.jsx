import React, {useEffect, useState} from "react";
import './Home.css'

import { db } from "../../firebase";
import { onValue, ref} from "firebase/database";
import StoryList from "../story-list/story-list";




const Default = ({ name='', userEmail='' }) => {
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

  return(
       <div className="home">
        
        <div className="home-header">-Top Stories-</div>

        <StoryList dataList={dataList} filterName="" userEmail={userEmail}/>
   </div> 
  )
}

export default Default