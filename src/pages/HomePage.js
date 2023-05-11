import '../App.css';
import { Routes, Route, Link } from "react-router-dom";
/* import Home from './components/pages/Homepage'; */
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ToDoPage from "../pages/ToDoPage";
import React, { useState } from 'react';
import Cat from "../assets/cat.png"
import ToDo from "../pages/ToDoPage"

function HomePage(){
    const [isButtonVisible, setButtonVisibility] = useState(true);

  const handleLoginButtonClick = () => {
    setButtonVisibility(false);
  };

    return(
        <div>
            <h1 className='title'>Structure your Day !</h1>
            {isButtonVisible && (
             <Link to="/LoginPage">
                 <button onClick={handleLoginButtonClick} className='log-in-button'>Log in</button>
             </Link>
        )}
        {isButtonVisible && (
          <Link to="/SignupPage">
            <button onClick={handleLoginButtonClick} className='sign-up-button'>Sign up</button>
          </Link>
        )}
        <div><img className='cat-gif' src={Cat} alt="cat" /></div>
    
        </div>
    )
}

export default HomePage;