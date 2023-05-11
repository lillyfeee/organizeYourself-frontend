import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import authService from "./../services/auth.service";


function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // axios.post(`${API_URL}/auth/login`, requestBody

    authService.login(requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/ToDoPage");
      })
      .catch((error) => {
      	const errorDescription = error.response.data.message;
      	setErrorMessage(errorDescription);
    	})
  };
  
  return (
    <div className="LoginPage">
      <h1 className="login-title">Log in</h1>

      <form className="auth-writing" onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input className="auth-writing" type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input className="auth-writing" type="password" name="password" value={password} onChange={handlePassword} />

        <button className="log-in-button" type="submit">Login</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p className="question">Don't have an account yet?</p>
      <Link className="sign-up-log"to={"/SignUpPage"}> Sign Up</Link>
    </div>
  )
}

export default LoginPage;