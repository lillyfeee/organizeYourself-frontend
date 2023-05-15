import { useState } from "react";
import axios from 'axios';
const API_URL = "http://localhost:5005";

function CreateToDo (){

    const [tasks, setTasks] = useState("");
    const[completed, setCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { tasks, completed };
    
        axios
          .post(
            `${API_URL}/task/tasks`,
            requestBody
          )
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="tasks"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    )


}

export default CreateToDo;