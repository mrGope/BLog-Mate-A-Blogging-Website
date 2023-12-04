import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar";
import { auth } from "./firebase";

import "./App.css";
import Logout from "./components/logout/Logout";

function App() {
  const [userName, setUserName] = useState(-1);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(userName, user.displayName)
      } else setUserName(-1);
    });
  }, []);

  return (
    <div className="App">
      
      <Router>
      <Navbar display={userName === -1 ? "none" : "flex"} name={userName}/>
        <Routes >
          <Route path="/home" element={<Home name={userName} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
