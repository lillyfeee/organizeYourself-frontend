import '../App.css';
import { Routes, Route, Link } from "react-router-dom";
/* import Home from './components/pages/Homepage'; */
import React, { useState } from 'react';
import Navbar from "../pages/Navbar"
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";

function ToDoPage (){

    return (
        <div>
        {<Navbar/>}
        <section className="to-do-daily">
            <h1>To Do's</h1>
        </section>
            
        </div>
    )
    
}

export default ToDoPage;