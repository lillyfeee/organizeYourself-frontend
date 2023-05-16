import '../App.css';
import { Routes, Route, Link } from "react-router-dom";
/* import Home from './components/pages/Homepage'; */
import React, { useState } from 'react';
import Navbar from "../pages/Navbar"
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import flower from "../assets/output-onlinegiftools.gif"
import CreateToDo from '../components/CreateToDo';
const API_URL = "http://localhost:5005";

function AllToDoPage (){

    

    return (
        <div>
        {<Navbar/>}
        <section className="to-do-daily-2">
         <h1>To Do's</h1>
        </section>
        <section className ="weekly-to-do">
            <h1>Weekly To Do's</h1>
        </section>
        <section className="goals">
            <h1>Goals</h1>
        </section>
        <div><img className='flower-gif-2' src={flower} alt="flowers" /></div>
        </div>
    )
    
}

export default AllToDoPage;