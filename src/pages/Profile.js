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
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import Cat from "../assets/cat.png"

const API_URL = "http://localhost:5005";

function ProfilePage (){
  
    const {logOutUser } = useContext(AuthContext);

    const {user} = useContext(AuthContext)

    return (
        <div>
        {<Navbar/>}
        <section className="profile">
         <h1>Profile</h1>
         <p>Email: {user.email}</p>
         <Link onClick={logOutUser} to="/"><button className="link2">Log out</button></Link>
         <div><img className='cat-gif' src={Cat} alt="cat" /></div>
    
        </section>
        </div>
    )
    
}

export default ProfilePage;