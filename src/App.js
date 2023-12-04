import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

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

function App() {
  const [isLogOut, setIsLogOut] = useState(false)
  const [userName, setUserName] = useState(-1);
  const [userEmail, setUserEmail] = useState(-1);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setUserEmail(user.email)
        console.log(userName, user.displayName)
        console.log(userEmail, user.email)
      } else setUserName(-1);
    });
  }, []);

  return (
    <div className="App">
      
      <Router>
      <Navbar display={userName === -1 ? "none" : "flex"} name={userName} setIsLogOut={(value) => setIsLogOut(value)}/>
        <Routes >
          <Route path="/home" element={<Home name={userName} userEmail={userEmail}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/my-stories" element={<MyStories name={userName} userEmail={userEmail}/>}/>
          <Route path="/story/:id" element={<Story name={userName} userEmail={userEmail}/>}/>
          <Route path="/new-story" element={<NewStory name={userName} userEmail={userEmail}/>}/>
        </Routes>
        {
            isLogOut===true &&
            <Logout setIsLogOut={(value) => setIsLogOut(value)}/>
        }
          <div className="fixed-new-blog" title="Share New Story">
            <Link to="/new-story">New</Link>
          </div>
      </Router>
      
    </div>
  );
}

export default App;
