import React, { useState } from "react";
import { LoginForm, LoginRegisterButton } from "../../components";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin() {
        console.log(username, password)
        //fetch request to db

        //dummy username and password
        let dummyUsername = "aa"
        let dummyPassword = "aa"

        if (username === dummyUsername && password === dummyPassword) {
            navigate("/dashboard");
        } else {
            alert("Login Failed!")
        }
    }

    return(
        <>
        <h1>Login Page</h1>
        <LoginForm username={username} setUsername={setUsername}
        password={password} setPassword={setPassword}/>

        <LoginRegisterButton handleLogin={handleLogin}/>
        </>
    )
}

/*<div>
            <button className="log-reg-button"
            onClick={handleLogin}>Login</button>
        </div>
        */