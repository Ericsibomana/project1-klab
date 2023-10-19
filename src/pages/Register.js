import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function Login() {


    const [action, setAction] = useState("Sign Up");
  return (
    <div className="login-form-container">
        
        <div className="form-container">
        <div className="form">
            <div className="form-profile">
                <div className="user-image">
                <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        <h1>{action}</h1>
        <form action="">
           <div className="email-container">
           <label>First Name</label><br/>
            <input type="text" className='email'/>
           </div> 
           <div className="password-container">
           <label>Last Name</label><br/>
            <input type="password" className='password'/>
           </div>
           <div className="email-container">
           <label>Email</label><br/>
            <input type="text" className='email'/>
           </div>
           <div className="password-container">
           <label>Password</label><br/>
            <input type="password" className='password'/>
           </div>
           <div className="role">
            <select name="role" id="">
                <option value="">User</option>
                <option value="">Admin</option>
            </select>
           </div>
            <div className="login-button">
            <button className={action === "Login"?"login gray":"login"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button> 
            <button className={action === "Sign Up"?"login gray":"login"} onClick={()=>{setAction("Login")}}>Login</button>
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Login;