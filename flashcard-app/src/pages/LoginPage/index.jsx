import React, { useState } from "react";
import { LoginForm, LoginRegisterButton } from "../../components";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

import './login.css'

let dataHolder;

export default function LoginPage({reroute = "/", token, setToken}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userFound, setUserFound] = useState(false);
    const navigate = useNavigate();

    async function getUserCreds() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch(`https://crammer-backend.onrender.com/user/${username}`, options)
            .then(data => {
                console.log(data.ok)
                if (data.ok) {
                    console.log("true")
                    data.json()
                    const generateToken = async () => {
                        console.log("ok")
                        await getAuth({username, password});
                    }
                    generateToken()
                } else {
                    alert("User Credentials are Incorrect!");
                }
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })
    }

    async function getAuth(credentials) { 
        console.log("ok")
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(credentials)
        }
        
        fetch("https://crammer-backend.onrender.com/user/login", options)
            .then(data => data.json())
            .then(response => {
                console.log("data", response)
                setToken(response)
                navigate(reroute)
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })
    }

    return(
        <>
        <LoginForm username={username} setUsername={setUsername}
        password={password} setPassword={setPassword}/>
        <LoginRegisterButton buttonText="Login" handleLogin={getUserCreds}/>
        <span className="message">Don’t have an account? <a className="link" href="/register">Sign up</a>.</span>
        </>
    )
}

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
}
