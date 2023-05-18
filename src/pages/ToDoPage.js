import '../App.css';
import { Routes, Route, Link } from "react-router-dom";
/* import Home from './components/pages/Homepage'; */
import React, { useContext, useEffect, useState } from 'react';
import Navbar from "../pages/Navbar"
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import flower from "../assets/output-onlinegiftools.gif"
import axios from 'axios';
import CreateToDo from '../components/CreateToDo';
import { AuthContext } from '../context/auth.context';
import Grateful from '../components/Grateful';
import check from "../assets/checkmark.png"

const API_URL = process.env.REACT_APP_API_URL;

function ToDoPage (){

        const handleClick = async (taskId) => {
          try {
            await axios.delete(`${API_URL}/task/tasks/${taskId}`);
            getAllProjects()
            getAllGrateful()
          } catch (error) {
            console.log(error)
          }
        };

        const handleDelete = async (taskId) => {
            try {
              await axios.delete(`${API_URL}/name/${taskId}`);
              getAllGrateful()
            } catch (error) {
              console.log(error)
            }
          };


    const {user} = useContext(AuthContext)
    const [projects, setProjects] = useState([])
    const [grateful, setGrateful] = useState([])
    const getAllProjects = () => {

       axios
          .get(
         `${API_URL}/api/projects`,
        { headers: { Authorization: `Bearer ${user}` } }
        ).then (response => setProjects(response.data)) 
        .catch(error => console.log(error))
    }
    const getAllGrateful = () => {
        axios.get(`${API_URL}/name/`,
        { headers: { Authorization: `Bearer ${user}` } }
        ).then (response => setGrateful(response.data))
        .catch(error => console.log(error))
    } 

    useEffect(()=> {getAllProjects()
         getAllGrateful() }, [])

   return (
        <div>
        {<Navbar/>}
        <section className="to-do-daily">
         <h1 className="titeling">To Do's</h1>
         <div>
            {<CreateToDo loadList={getAllProjects}/>}
         </div>
         <div>
            {projects.map(project => {
                return(
                    <div>
                    <p key={project._id}>{project.tasks}</p>
                    <button className="delete-button" onClick={(event) => {handleClick(project._id, event); event.preventDefault();}} >finished</button>
                    </div>
                )
            })} 
        

         </div>
        </section>
        <section className="grateful-things">
            <h1 className="titeling2">What are you grateful for today?</h1>
           <div>
             {<Grateful loadList={getAllGrateful} />}
           </div>
           <div>
           {grateful.map(project => {
                return(
                    <div>
                    <p key={project._id}>{project.name}</p>
                    <button className="delete-button2" onClick={(event) => {handleDelete(project._id, event); event.preventDefault();}}>delete</button>
                    </div>
                )
            })} 
           </div>
        </section>
        <div><img className='flower-gif' src={flower} alt="flowers" /></div>
        </div>
        
    )
    
}


export default ToDoPage;