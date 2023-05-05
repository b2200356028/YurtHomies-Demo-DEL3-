import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { ForgotPassword } from "./ForgotPassword";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="row">
      <div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : currentForm === "forgotpwd" ? <ForgotPassword onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
        <h3 className='terms-conditions'> Copyright © 2023 Yurt Homies All rights reserved. </h3>
      </div>
      <div className="sideImage">
        <h3 className='first-txt'> Captured By</h3>
        <h3 className='second-txt'> - Elif Tekinay & Hilal Nur Koyuncu</h3>
      </div>
    </div>
  );
}

export default App;
