import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar";
import { auth } from "./firebase";

import "./App.css";
import Logout from "./components/logout/Logout";
import Default from "./components/default/Home";

function App() {
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
      <Navbar display={userName === -1 ? "none" : "flex"} name={userName}/>
        <Routes >
          <Route path="/home" element={<Default name={userName} userEmail={userEmail}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
