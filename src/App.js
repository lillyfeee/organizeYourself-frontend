import './App.css';
import { Routes, Route } from "react-router-dom";
/* import Home from './components/pages/Homepage'; */
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage"


function App() {
  return (
    <div className="App">
      <h1>Structure your Day!</h1>
      <Routes>
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/SignupPage" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;

// import { useState } from "react";
