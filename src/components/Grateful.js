import { useState } from "react";
import axios from 'axios';
import plus from "../assets/262038-removebg-preview.png"
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5005";

function Grateful (props){
const navigate = useNavigate()
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { name };
    
        axios
          .post(
            `${API_URL}/name`,
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
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit"><img className='plus-icon' src={plus} alt="plus" /></button>
      </form>
    )


}

export default Grateful;