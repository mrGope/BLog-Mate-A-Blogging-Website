import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./components/default/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar";
import { auth } from "./firebase";

import "./App.css";
import Logout from "./components/logout/Logout";
import MyStories from "./components/my-stories/MyStories";
import Story from "./components/story/story";
import NewStory from "./components/new-story/new-story";
import EditStory from "./components/edit-story/edit-story";
import About from "./components/about/about";

function App() {
  const [isLogOut, setIsLogOut] = useState(false)
  const [userName, setUserName] = useState(-1);
  const [userEmail, setUserEmail] = useState(-1);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setUserEmail(user.email)
        //console.log(userName, user.displayName)
        //console.log(userEmail, user.email)
      } else setUserName(-1);
    });
  }, []);

  return (
    <div className="App">
      
      <Router>
      <Navbar display={userName === -1 ? "none" : "flex"} name={userName} setIsLogOut={(value) => setIsLogOut(value)}/>
        <Routes >
        <Route path='/' element={ <Navigate to="/login"/> }/>
          <Route path="/home" element={<Home name={userName} userEmail={userEmail}/>} />
          <Route path="/login" element={<Login name={userName} userEmail={userEmail}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/my-stories" element={<MyStories name={userName} userEmail={userEmail}/>}/>
          <Route path="/story/:id" element={<Story name={userName} userEmail={userEmail}/>}/>
          <Route path="/new-story" element={<NewStory name={userName} userEmail={userEmail}/>}/>
          <Route path="/edit-story/:id" element={<EditStory name={userName} userEmail={userEmail}/>}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        {
            isLogOut===true &&
            <Logout setIsLogOut={(value) => setIsLogOut(value)}/>
        }
          {
            userName!==-1 &&
            <div className="fixed-new-blog" title="Share New Story">
            <Link className="visible-new-story" to="/new-story">New</Link>
            <Link className="hidden-new-story" to="/new-story">+</Link>
          </div>
          }
      </Router>
      
    </div>
  );
}

export default App;
