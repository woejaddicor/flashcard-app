import React, { useState } from "react";
import { LoginForm, LoginRegisterButton } from "../../components";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../contexts";
import PropTypes from 'prop-types';

let dataHolder;

export default function LoginPage({token, setToken}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function getUserCreds() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch(`http://127.0.0.1:3000/user/${username}`, options)
            .then(data => data.json())
            .then(response => {
                //console.log("data", response)
                return response
            })
            .catch((err) => {
                console.log(err)
            })
        const generateToken = await getAuth({username, password});
    }

    async function getAuth(credentials) { 
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(credentials)
        }
        
        fetch("http://127.0.0.1:3000/user/login", options)
            .then(data => data.json())
            .then(response => {
                setToken(response)
                return response
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return(
        <>
        <LoginForm username={username} setUsername={setUsername}
        password={password} setPassword={setPassword}/>
        <LoginRegisterButton handleLogin={getUserCreds}/>
        <span className="message">Don’t have an account? <a className="link" href="/register">Sign up</a>.</span>
        </>
    )
}

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
}
