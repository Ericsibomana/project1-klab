import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../components/NavBar/NavBar';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const LoginSignup = () => {
    const [action, setAction] = useState("Login Form");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
  
    const handleSubmit = (e) => {
        e.preventDefault();
          console.log(email);
    }
    return (
        <>
        <Navbar />
         <div className="login-form-container">
            <div className="form-container">
                <div className="form">
                    <div className="form-profile">
                        <div className="user-image">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <h1>{action}</h1>
                    <form action="" className='form-content' onSubmit={handleSubmit}>
                        {action === "Login Form" ? <div></div> : <div className="email-container">
                            <label>First Name</label><br />
                            <input type="text" className='email' />
                        </div>}
                        {action === "Login Form" ? <div></div> : <div className="password-container">
                            <label>Last Name</label><br />
                            <input type="password" className='password' />
                        </div>}

                        <div className="email-container">
                            <label>Email</label><br />
                            <input type="text" className='email' value={email} placeholder='email'/>
                        </div>
                        <div className="password-container">
                            <label>Password</label><br />
                            <input type="password" className='password' value={password}/>
                        </div>
                        {action === "Login Form" ? <div></div> : <div className='profile-input'>
                            <label className='profile'>Upload photo</label>
                            <input type="file" name="" id="" />
                        </div> }
                        <div className="login-button">
                            
                            {action === "SignUp Form" ? <div></div> :<button className={action === "Sign Up" ? "signupLogin gray" : "signupLogin"} type="submit" onClick={() => { setAction("Login Form") }}>Login</button>}
                        {action === "Login Form" ? <div></div> : <button className={action === "Login" ? "signupLogin gray" : "signupLogin"} type="button" onClick={() => { setAction("SignUp Form") }}>Sign Up</button>}
                        </div>
                        {action === "SignUp Form" ? <div></div> : <p>Don't have account? <span onClick={() => { setAction("SignUp Form") }} className='span'>SIGN UP HERE</span></p>}
                        {action === "Login Form" ? <div></div> : <p>Already have account? <span onClick={() => { setAction("Login Form") }} className='span'>LOGIN HERE</span> </p>}
                        
                    </form>
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default LoginSignup;


