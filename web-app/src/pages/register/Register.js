import "./register.css"
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Link } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false);

  const handleSubm = async (e) =>{
    e.preventDefault(); //so it doesn't get mad and try to refresh when you have nothing in the fields
    setError(false);
    try {
    
    const res = await axios.post("/auth/register", {
      username,
      email,
      password,
    });

    res.data && window.location.replace("/login");
  }
  catch (err) {
    setError(true);
  }
};


  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubm}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={e=>setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        {
          error && <span>There is an error!</span> //if error is true, notify user
        } 
    </div>
  )
}
