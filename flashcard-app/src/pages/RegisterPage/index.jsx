import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm, RegisterForm, LoginRegisterButton } from "../../components";
import './register.css'

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigate = useNavigate();

    async function handleRegister() {
        const passwordMatch = checkPasswordMatch();

        if (passwordMatch == true) {
            //fetch request to db   
            const response = await registerUser({username, password});
            console.log(response)
     
            navigate("/login");
        } else {
            alert("Login Failed!")
        }
    }

    async function registerUser(reqBody) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(reqBody)
        }

        fetch("http://127.0.0.1:3000/user", options)
        .then(data => data.json())
            .then(response => {
                console.log("data", response)
                return response
            })
             .catch((err) => {
                console.log(err)
            })
    }

    function checkPasswordMatch() {
        if (password === repeatPassword) {
            return true;
        }
        return false;
    }

    return(
        <>
        <h1>Register</h1>
        <LoginForm username={username} setUsername={setUsername}
        password={password} setPassword={setPassword}/>

        <RegisterForm repeatPassword={repeatPassword} setRepeatPassword={setRepeatPassword}/>

        <LoginRegisterButton buttonText="Register" handleLogin={handleRegister}/>
        </>
    )
}
