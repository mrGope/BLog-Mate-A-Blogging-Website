import React from 'react'
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import './Logout.css'

function Logout() {
    const navigate = useNavigate();
    const handleLogOut = () => {
        signOut(auth)
        navigate('/')
    }
    const handleGoBack = () => {
        window.history.back()
    }
  return (
    <div className='logout-container'>
        <div className='logout'>
            <span>Are you sure?</span>
            <div className='logout-buttons'> 
                <button onClick={() => {handleLogOut()}}>Yes</button>
                <button onClick={() => handleGoBack()}>No</button>
            </div>
        </div>
    </div>
  );
}

export default Logout