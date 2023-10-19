import React from "react";
// import "../components/NavBar/";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
// import Navbar from '../components/NavBar/NavBar';
import { Link, useHistory } from "react-router-dom"

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Modal({ setOpenModal }) {
    const [action, setAction] = useState("Login Form");
    
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState('');

    // const navigate = useNavigate()
    const history = useHistory();

    const FormData = {
        firstname,
        lastname,
        email,
        password,
        profile,
    };
    const LoginData = {
        email,
        password,
    };
  
    const handlesignup = async (data) => {
        try {
            const response = await fetch('https://my-first-blog-apis.onrender.com/api/myblog/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Response:', data);
                toast("User are created successfully")
                setFirstname('')
                setLastname('')
                setEmail('')
                setPassword('')
                setProfile('')
            } else {
                console.error('Failed to create user.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLogin = async (data) => {
        try {
            const response = await fetch('https://my-first-blog-apis.onrender.com/api/myblog/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
            });

            if (response.ok) {
                const data = await response.json();
                toast("Login successfully")
                // console.log('Response:', data);
                localStorage.setItem("token",data.token)
                setEmail('')
                setPassword('')

               
                setTimeout(() => {
                    history.push('/dashboard');
                }, 2000); // Redirect after a 2-second delay (adjust as needed)
            } else {
                toast('Invalid Email or Password');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="login-form-container">
            <div className="form-container">
                <div className="form">
                    <div className="form-profile">
                        <div className="user-image">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <div className="titleCloseBtn">
          <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={() => {setOpenModal(false);}} />
        </div>
                    <h1>{action}</h1>
                    <form action="" className='form-content'>
                        {action === "Login Form" ? <div></div> : <div className="email-container">
                            <label>First Name</label><br />
                            <input type="text" className='email' value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                        </div>}
                        {action === "Login Form" ? <div></div> : <div className="password-container">
                            <label>Last Name</label><br />
                            <input type="text" className='password' value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                        </div>}

                        <div className="email-container">
                            <label>Email</label><br />
                            <input type="text" className='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="password-container">
                            <label>Password</label><br />
                            <input type="password" className='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        {action === "Login Form" ? <div></div> : <div className='profile-input'>
                            <label className='profile'>Upload photo</label>
                            <input type="file" name="profile" value={profile} onChange={(e) => setProfile(e.target.value)}/>
                        </div> }
                        <div className="login-button">
                            
                            {action === "SignUp Form" ? <div></div> : <button className={action === "Sign Up" ? "signupLogin gray" : "signupLogin"} type="submit" onClick={(e) => {
                        e.preventDefault()
                        handleLogin(LoginData)
                }}>Login</button>}
                        {action === "Login Form" ? <div></div> : <button className={action === "Login" ? "signupLogin gray" : "signupLogin"} type="submit" onClick={(e) => {
                        e.preventDefault()
                    handlesignup(FormData)
                }}>Sign Up</button>}
                        </div>
                        {action === "SignUp Form" ? <div></div> : <p>Don't have account? <span onClick={() => { setAction("SignUp Form") }} className='span'>SIGN UP HERE</span></p>}
                        {action === "Login Form" ? <div></div> : <p>Already have account? <span onClick={() => { setAction("Login Form") }} className='span'>LOGIN HERE</span> </p>}
                        
                    </form>
                    
                </div>
            </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Modal;