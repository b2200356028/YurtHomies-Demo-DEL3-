import React, { useState } from "react";
import axios from 'axios';

export const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setID] = useState('');

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
         const a = name.split(" ")

         await axios.post("http://localhost:8080/auth/register",
            {
                id : id,
                firstName : a[0],
                lastName : a[a.length-1]
            });
                alert("Student Registration Succesfully");
                setFirstName(firstName);
                setLastName(lastName);
                setID(id);
        }
        catch(err){
            alert("User Registration Failed");
            console.log("asdasdsad");
        }

    }

    return (
        <div className="auth-form-container">
            <h2>Enroll</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                <label htmlFor="id">Student ID</label>
                <input value={id} onChange={(e) => setID(e.target.value)} placeholder="Student ID" id="id" name="id" />
                <button className="submits" type="submit">Request to Enroll</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already enrolled? Sign in now.</button>
        </div>
    )
}