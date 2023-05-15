import '../App.css';
import { Routes, Route, Link } from "react-router-dom";
/* import Home from './components/pages/Homepage'; */
import React, { useState } from 'react';
import Navbar from "../pages/Navbar"
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import flower from "../assets/output-onlinegiftools.gif"
import axios from 'axios';
import CreateToDo from '../components/AddToDo';
const API_URL = "http://localhost:5005";

function ToDoPage (){
    const getAllProjects = () => {

       axios
          .get(
         `${API_URL}/api/projects`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
        )
    }

   return (
        <div>
        {<Navbar/>}
        <section className="to-do-daily">
         <h1>To Do's</h1>
         <div>
            {<CreateToDo/>}
            
      
    </div>
        </section>
        <section className="grateful-things">
            <h1>What are you grateful for today?</h1>
        </section>
        <div><img className='flower-gif' src={flower} alt="flowers" /></div>
        </div>
        
    )
    
}

export default ToDoPage;