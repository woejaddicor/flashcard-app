import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm, RegisterForm, LoginRegisterButton } from "../../components";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigate = useNavigate();

    function handleRegister() {
        console.log(username, password)

        const passwordMatch = checkPasswordMatch();
        console.log(passwordMatch)
        //fetch request to db

        //dummy username and password
        let dummyUsername = "aa"
        let dummyPassword = "aa"

        if (username === dummyUsername && password === dummyPassword && passwordMatch == true) {
            navigate("/dashboard");
        } else {
            alert("Login Failed!")
        }
    }

    function checkPasswordMatch() {
        console.log(password, repeatPassword)
        if (password === repeatPassword) {
            return true;
        }
        return false;
    }

    return(
        <>
        <h1>Register Page</h1>
        <LoginForm username={username} setUsername={setUsername}
        password={password} setPassword={setPassword}/>

        <RegisterForm repeatPassword={repeatPassword} setRepeatPassword={setRepeatPassword}/>

        <LoginRegisterButton handleLogin={handleRegister}/>
        </>
    )
}