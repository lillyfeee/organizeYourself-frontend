import { useState } from "react";
import axios from 'axios';
import plus from "../assets/262038-removebg-preview.png"
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5005";

function CreateToDo (props){
const navigate = useNavigate()
    const [tasks, setTasks] = useState("");
    const[completed, setCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { tasks, completed };
    
        axios
          .post(
            `${API_URL}/task/tasks`,
            requestBody
          ).then(response => {
            props.loadList()
          })
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
          className= "ToDoBox"
          type="text"
          name="tasks"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />

        <button type="submit"><img className='plus-icon' src={plus} alt="plus" /></button>
      </form>
    )


}

export default CreateToDo;