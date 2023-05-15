import { Link } from "react-router-dom";
/* import home from "../images/home.png"; */
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import Home from "../assets/2590685.png"
import profile from "../assets/profile.png"
import lists from "../assets/todo.png"
import AllToDoPage from "./AllToDoPage";


function Navbar () {

  const { isLoggedIn, logOutUser } = useContext(AuthContext);

    return (
        <nav className="navgation">
          <div className="nav-section">
            {/* <Link className="link" to="/"></Link> */}
            <div className="find-links">
            
            </div>
          </div>

          {!isLoggedIn && <div className="log-links">
              <Link className="link" to="/login"><button className="link">Log in</button></Link> 
              <Link className="link" to="/signup"><button className="link">Join now</button></Link>
            </div> }

            {isLoggedIn && <div className="profile-links">
              <Link to="/Profile"><img className="logo" src={profile} alt="home"></img></Link>
              {/* <Link onClick={logOutUser} to="/"><button className="link">Log out</button></Link>  */}
              <Link to="/ToDoPage"><img className="logo" src={Home} alt="home"></img></Link>
              <Link to="/AllToDoPage"><img className="logo" src={lists} alt="lists"></img></Link>
            </div>}
        </nav>
    )
}

export default Navbar;