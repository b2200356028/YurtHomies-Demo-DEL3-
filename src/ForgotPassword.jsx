import React, { useState } from "react";
import axios from 'axios';


export const ForgotPassword = (props) => {
    const [id, setID] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/forgotPassword', {
                id: id,
            });alert(response.data);
    
            console.log(response.data);
            // Handle the response from the backend
            // For example, store the JWT token in localStorage, redirect to a protected route, etc.
        } catch (error) {
            console.error('Error during login:', error);
            // Handle errors, e.g., show an error message, etc.
        }
    }
    return (
        <div className="auth-form-container">
            <h2>Forgot Password</h2>
            <form className="forgotpwd-form" onSubmit={handleSubmit}>
                <label htmlFor="id">Student ID</label>
                <input value={id} onChange={(e) => setID(e.target.value)} placeholder="Student ID" id="id" name="id" />
                <button className="submits" type="submit" onClick={email}>Continue</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Return to Login</button>
            <h3 id="e-mail" hidden={true}>If there is an e-mail matching with provided Student-ID, we sent an e-mail about resetting your password.</h3>
        </div>
    )
    function email() {
        document.getElementById("e-mail").hidden = false;
    }
}
