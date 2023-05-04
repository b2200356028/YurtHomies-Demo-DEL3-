import React, { useState } from "react";
import axios from 'axios';

export const Login = (props) => {
    const [id, setID] = useState('');
    const [pass, setPass] = useState('');
    const [rememberMe, setRememberMe] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/users/login', {
                id: id,
                password: pass,
            });alert("login successful");
    
            console.log(response.data);
            // Handle the response from the backend
            // For example, store the JWT token in localStorage, redirect to a protected route, etc.
        } catch (error) {
            console.error('Error during login:', error);
            // Handle errors, e.g., show an error message, etc.
        }
    }

    return (
        <div>
            <div className="huTitle">
                <img src="https://upload.wikimedia.org/wikipedia/tr/thumb/2/28/Hacettepe_%C3%9Cniversitesi_Logosu.svg/1200px-Hacettepe_%C3%9Cniversitesi_Logosu.svg.png" alt="logo" className="logo" />
                <h1>CIES</h1>
            </div>
            <div className="auth-form-container">
                <h3>Welcome back to CIES</h3>
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="id">Student ID</label>
                    <input value={id} onChange={(e) => setID(e.target.value)} placeholder="Student ID" id="id" name="id" />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Your Password" id="password" name="password" />
                    <div>
                        <input value={rememberMe} onChange={(e) => setRememberMe(!rememberMe)} type="checkbox" id="rememberMe" name="rememberMe" />
                        <label id="rememberMe" htmlFor="rememberMe"> Remember me </label>
                        <button className="link-btn-forgot-pwd" onClick={() => props.onFormSwitch('forgotpwd')}>Forgot password?</button>
                    </div>
                    <button className="submits" type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Enroll here.</button>
            </div>
        </div>
    )
}