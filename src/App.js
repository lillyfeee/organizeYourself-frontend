import './App.css';
import { Routes, Route, Link } from "react-router-dom";
/* import Home from './components/pages/Homepage'; */
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ToDoPage from "./pages/ToDoPage";
import React, { useState } from 'react';
import Cat from "./assets/cat.png"
import ToDo from "./pages/ToDoPage"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/SignupPage" element={<SignupPage />} />
        <Route exact path="/ToDoPage" element={<ToDoPage/>} />
      </Routes>
    </div>
  );
}

export default App;

// import { useState } from "react";
