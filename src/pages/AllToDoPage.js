import '../App.css';
import { Routes, Route, Link } from "react-router-dom";
/* import Home from './components/pages/Homepage'; */
import React, { useContext, useEffect, useState } from 'react';
import Navbar from "../pages/Navbar"
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import flower from "../assets/output-onlinegiftools.gif"
import CreateToDo from '../components/CreateToDo';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import WeeklyToDo from '../components/WeeklyToDo';
const API_URL = "http://localhost:5005";

function AllToDoPage (){

    const handleClick = async (taskId) => {
        try {
          await axios.delete(`${API_URL}/task/tasks/${taskId}`);
          getAllProjects()
        } catch (error) {
          console.log(error)
        }
      };

    const {user} = useContext(AuthContext)
    const [projects, setProjects] = useState([])
    const getAllProjects = () => {

       axios
          .get(
         `${API_URL}/api/projects`,
        { headers: { Authorization: `Bearer ${user}` } }
        ).then (response => setProjects(response.data)) 
        .catch(error => console.log(error))
    }
    useEffect(()=> {getAllProjects()}, [])


    return (
        <div>
        {<Navbar/>}
        <section className="to-do-daily-2">
         <h1>To Do's</h1>
         <div>
            {<CreateToDo loadList={getAllProjects}/>}
         </div>
         <div>
            {projects.map(project => {
                return(
                    <div>
                    <p key={project._id}>{project.tasks}</p>
                    <button className="delete-button" onClick={(event) => {handleClick(project._id, event); event.preventDefault();}}>delete</button>
                    </div>
                )
            })}


         </div>
        </section>
        <section className ="weekly-to-do">
            <h1>Weekly To Do's</h1>
            <div>{<WeeklyToDo/>}</div>
        </section>
        <section className="goals">
            <h1>Goals</h1>
        </section>
        <div><img className='flower-gif-2' src={flower} alt="flowers" /></div>
        </div>
    )
    
}

export default AllToDoPage;