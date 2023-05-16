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

function ProfilePage (){

    

    return (
        <div>
        {<Navbar/>}
        <section className="profile">
         <h1>Profile</h1>
        </section>
        </div>
    )
    
}

export default ProfilePage;