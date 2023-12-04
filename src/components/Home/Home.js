import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

function Home(props) {
  return(
    <div>
    <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
   </div> 
  )
}

export default Home;
